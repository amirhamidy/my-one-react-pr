import React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import { TextStyle } from "@tiptap/extension-text-style"
import Image from "@tiptap/extension-image"
import { TextAlign } from "@tiptap/extension-text-align"
import ResizeImage from "tiptap-extension-resize-image"

const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      fontSize: {
        default: "16px",
        parseHTML: element => element.style.fontSize,
        renderHTML: attributes => {
          if (!attributes.fontSize) return {}
          return { style: `font-size: ${attributes.fontSize}` }
        },
      },
    }
  },
})

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      Image,
      ResizeImage,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>داداش این اولین تست ادیتور ماست 🚀</p>",
  })

  if (!editor) return null

  const addImage = () => {
    const url = window.prompt("لینک عکس رو بده:")
    if (url) editor.chain().focus().setImage({ src: url }).run()
  }

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md">
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-1 rounded-lg ${editor.isActive("bold") ? "bg-blue-500 text-white" : "bg-white"}`}
        >
          B
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-1 rounded-lg ${editor.isActive("italic") ? "bg-blue-500 text-white" : "bg-white"}`}
        >
          I
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-1 rounded-lg ${editor.isActive("underline") ? "bg-blue-500 text-white" : "bg-white"}`}
        >
          U
        </button>
        <button onClick={addImage} className="px-3 py-1 rounded-lg bg-green-500 text-white">
          درج عکس
        </button>
        <select
          onChange={(e) => editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()}
          className="px-2 py-1 rounded-lg"
        >
          <option value="12px">12</option>
          <option value="14px">14</option>
          <option value="16px" selected>16</option>
          <option value="20px">20</option>
          <option value="24px">24</option>
          <option value="32px">32</option>
        </select>
      </div>

      <EditorContent editor={editor} className="bg-white p-4 rounded-lg shadow-inner min-h-[200px]" />
    </div>
  )
}
