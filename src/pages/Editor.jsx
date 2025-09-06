import React, { useRef } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import { TextStyle } from "@tiptap/extension-text-style"
import Image from "@tiptap/extension-image"
import ResizeImage from "tiptap-extension-resize-image"
import { TextAlign } from "@tiptap/extension-text-align"
import Link from "@tiptap/extension-link"

const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      fontSize: {
        default: "16px",
        parseHTML: el => el.style.fontSize,
        renderHTML: attrs => (attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {}),
      },
    }
  },
})

export default function Editor() {
  const fileInputRef = useRef(null)

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      Image,
      ResizeImage,
      Link.configure({ openOnClick: true, autolink: true, linkOnPaste: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
    ],
    content: "<p>شروع کنید 🚀</p>",
  })

  if (!editor) return null

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => editor.chain().focus().setImage({ src: reader.result }).run()
    reader.readAsDataURL(file)
  }

  const addImage = () => fileInputRef.current.click()
  const addLink = () => {
    const url = window.prompt("لینک رو وارد کن:")
    if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }
  const removeLink = () => editor.chain().focus().unsetLink().run()

  return (
    <div className="editor-wrapper">
      <div className="editor-toolbar">
        {[
          { cmd: "toggleBold", label: "B" },
          { cmd: "toggleItalic", label: "I" },
          { cmd: "toggleUnderline", label: "U" },
        ].map(btn => (
          <button
            key={btn.cmd}
            onClick={() => editor.chain().focus()[btn.cmd]().run()}
            className={`editor-btn ${
              editor.isActive(btn.cmd.replace("toggle", "").toLowerCase()) ? "active" : ""
            }`}
          >
            {btn.label}
          </button>
        ))}
        <button onClick={addImage} className="editor-btn image-btn">
          📷
        </button>
        <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} className="hidden" />
        <select
          onChange={e => editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()}
          defaultValue="16px"
          className="editor-select"
        >
          {["12px","14px","16px","20px","24px","32px"].map(sz => (
            <option key={sz} value={sz}>{sz}</option>
          ))}
        </select>
        <button onClick={addLink} className="editor-btn link-btn">
          🔗
        </button>
        <button onClick={removeLink} className="editor-btn remove-link-btn">
          ❌
        </button>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </div>
  )
}
