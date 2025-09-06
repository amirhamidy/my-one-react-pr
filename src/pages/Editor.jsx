import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style"; 
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { TextAlign } from "@tiptap/extension-text-align";
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  X,
} from "lucide-react";
import Swal from "sweetalert2";

const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize,
        renderHTML: (attributes) => {
          if (!attributes.fontSize) return {};
          return { style: `font-size: ${attributes.fontSize}` };
        },
      },
    };
  },
});

export default function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      FontSize,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({
        placeholder: "شروع به تایپ کنید...",
      }),
    ],
    content: "",
  });

  if (!editor) return null;

  const setLink = async () => {
    const { value: url } = await Swal.fire({
      title: "افزودن لینک",
      input: "url",
      inputPlaceholder: "آدرس لینک را وارد کنید",
      showCancelButton: true,
      confirmButtonText: "ثبت",
      cancelButtonText: "لغو",
    });
    if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const unsetLink = () => {
    editor.chain().focus().unsetLink().run();
  };

  const addImage = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result }).run();
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const resizeImage = (percentage) => {
    const { state, dispatch } = editor.view;
    const { selection } = state;
    const node = selection.node;
    if (node && node.type.name === "image") {
      const tr = state.tr.setNodeMarkup(selection.from, undefined, {
        ...node.attrs,
        style: `width: ${percentage}%`,
      });
      dispatch(tr);
    }
  };

  return (
    <div>
      <div className="editor-toolbar">
        <button
          className={`editor-btn ${editor.isActive("bold") ? "active" : ""}`}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Bold size={16} />
        </button>
        <button
          className={`editor-btn ${editor.isActive("italic") ? "active" : ""}`}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Italic size={16} />
        </button>
        <button
          className={`editor-btn ${editor.isActive("underline") ? "active" : ""}`}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon size={16} />
        </button>
        <button className="editor-btn" onClick={setLink}>
          <LinkIcon size={16} />
        </button>
        <button className="editor-btn" onClick={unsetLink}>
          <X size={16} />
        </button>
        <button className="editor-btn" onClick={addImage}>
          <ImageIcon size={16} />
        </button>
        <button className="editor-btn" onClick={() => editor.chain().focus().setTextAlign("left").run()}>
          <AlignLeft size={16} />
        </button>
        <button className="editor-btn" onClick={() => editor.chain().focus().setTextAlign("center").run()}>
          <AlignCenter size={16} />
        </button>
        <button className="editor-btn" onClick={() => editor.chain().focus().setTextAlign("right").run()}>
          <AlignRight size={16} />
        </button>
        <select
          className="editor-select"
          onChange={(e) => editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()}
          defaultValue="16px"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
        <div className="image-resize-buttons">
          <button className="editor-btn" onClick={() => resizeImage(25)}>25%</button>
          <button className="editor-btn" onClick={() => resizeImage(50)}>50%</button>
          <button className="editor-btn" onClick={() => resizeImage(75)}>75%</button>
          <button className="editor-btn" onClick={() => resizeImage(100)}>100%</button>
        </div>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
}
