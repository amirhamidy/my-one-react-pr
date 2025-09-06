import React, { useRef } from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import { TextStyle } from "@tiptap/extension-text-style"
import Image from "@tiptap/extension-image"
import ResizeImage from "tiptap-extension-resize-image"
import { TextAlign } from "@tiptap/extension-text-align"
import Link from "@tiptap/extension-link"
import Swal from "sweetalert2"
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  X,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react"

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
      StarterKit.configure({ underline: false, link: false }),
      Underline,
      FontSize,
      Image,
      ResizeImage,
      Link.configure({ openOnClick: true, autolink: true, linkOnPaste: true }),
      TextAlign.configure({ types: ["paragraph", "heading"] }),
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

  const resizeImage = percent => {
    const { state } = editor
    const { selection } = state
    const node = state.doc.nodeAt(selection.from)
    if (!node || node.type.name !== "image") return
    editor.chain().focus().updateAttributes("image", { width: `${percent}%` }).run()
  }

  const addLink = async () => {
    const { value: url } = await Swal.fire({
      title: "لینک را وارد کنید",
      input: "url",
      inputPlaceholder: "https://example.com",
      showCancelButton: true,
      confirmButtonText: "اضافه کن",
      cancelButtonText: "لغو",
      inputValidator: value => !value && "لینک نمی‌تواند خالی باشد",
    })
    if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run()
  }

  const removeLink = () => editor.chain().focus().unsetLink().run()

  const setAlignGlobal = align => {
    if (!editor.view) return
    editor.chain().focus().command(({ tr, state }) => {
      state.doc.descendants((node, pos) => {
        if (node.type.name === "paragraph" || node.type.name === "heading") {
          tr.setNodeMarkup(pos, undefined, { ...node.attrs, textAlign: align })
        }
      })
      editor.view.dispatch(tr)
      return true
    }).run()
  }

  return (
    <>
      <div className="editor-toolbar">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`editor-btn ${editor.isActive("bold") ? "active" : ""}`}>
          <Bold size={16} />
        </button>

        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`editor-btn ${editor.isActive("italic") ? "active" : ""}`}>
          <Italic size={16} />
        </button>

        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`editor-btn ${editor.isActive("underline") ? "active" : ""}`}>
          <UnderlineIcon size={16} />
        </button>

        <button onClick={addImage} className="editor-btn">
          <ImageIcon size={16} />
        </button>
        <input type="file" ref={fileInputRef} accept="image/*" onChange={handleFileChange} className="file-input-hidden" />

        <select onChange={e => editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()} defaultValue="16px" className="editor-select">
          {["12px", "14px", "16px", "20px", "24px", "32px"].map(sz => (<option key={sz} value={sz}>{sz}</option>))}
        </select>

        <button onClick={addLink} className="editor-btn">
          <LinkIcon size={16} />
        </button>
        <button onClick={removeLink} className="editor-btn">
          <X size={16} />
        </button>

        <button onClick={() => setAlignGlobal("left")} className="editor-btn">
          <AlignLeft size={16} />
        </button>
        <button onClick={() => setAlignGlobal("center")} className="editor-btn">
          <AlignCenter size={16} />
        </button>
        <button onClick={() => setAlignGlobal("right")} className="editor-btn">
          <AlignRight size={16} />
        </button>

        <div className="image-resize-buttons">
          {[25, 50, 75, 100].map(p => (
            <button key={p} onClick={() => resizeImage(p)} className="editor-btn">{p}%</button>
          ))}
        </div>
      </div>

      <EditorContent editor={editor} className="editor-content" />
    </>
  )
}
