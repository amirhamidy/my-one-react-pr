import React, { useRef } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import { TextStyle } from "@tiptap/extension-text-style"
import Image from "@tiptap/extension-image"
import ResizeImage from "tiptap-extension-resize-image"
import { TextAlign } from "@tiptap/extension-text-align"
import Link from "@tiptap/extension-link"
import { Bold, Italic, Underline as UnderlineIcon, Image as ImageIcon, Link as LinkIcon, X } from "lucide-react"
import "./EditorStyles.css"

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
    <>
      <div className="editor-toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`editor-btn ${editor.isActive("bold") ? "active" : ""}`}>
          <Bold size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`editor-btn ${editor.isActive("italic") ? "active" : ""}`}>
          <Italic size={18} />
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`editor-btn ${editor.isActive("underline") ? "active" : ""}`}>
          <UnderlineIcon size={18} />
        </button>
        <button onClick={addImage} className="editor-btn">
          <ImageIcon size={18} />
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
        <button onClick={addLink} className="editor-btn">
          <LinkIcon size={18} />
        </button>
        <button onClick={removeLink} className="editor-btn">
          <X size={18} />
        </button>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </>
  )
}
