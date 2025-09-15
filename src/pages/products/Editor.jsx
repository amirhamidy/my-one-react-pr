import React, { useCallback, useMemo, useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { TextStyle } from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { TextAlign } from "@tiptap/extension-text-align";
import { Color } from "@tiptap/extension-color";
import { Bold, Italic, Underline as UnderlineIcon, Image as ImageIcon, Link as LinkIcon, AlignLeft, AlignCenter, AlignRight, X, RotateCcw, RotateCw } from "lucide-react";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const FontSize = TextStyle.extend({
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: el => el.style.fontSize,
        renderHTML: attrs => attrs.fontSize ? { style: `font-size: ${attrs.fontSize}` } : {}
      }
    };
  }
});

export default function Editor() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const extensions = useMemo(() => [
    StarterKit.configure({ underline: false }),
    Underline,
    FontSize,
    Link.configure({ openOnClick: false }),
    Image.extend({
      addAttributes() {
        return { ...this.parent?.(), class: { default: "editor-image size-100 align-left" } };
      }
    }),
    Color,
    TextAlign.configure({ types: ["heading", "paragraph"] }),
    Placeholder.configure({ placeholder: "شروع به تایپ کنید..." })
  ], []);

  const editor = useEditor({ extensions, content: "" });

  const setLink = useCallback(async () => {
    if (!editor) return;
    const { value: url } = await Swal.fire({ title: "افزودن لینک", input: "url", inputPlaceholder: "آدرس لینک را وارد کنید", showCancelButton: true, confirmButtonText: "ثبت", cancelButtonText: "لغو" });
    if (url) editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const unsetLink = useCallback(() => { if (editor) editor.chain().focus().unsetLink().run(); }, [editor]);
  const addImage = useCallback(() => {
    if (!editor) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        editor.chain().focus().setImage({ src: reader.result, class: "editor-image size-100 align-left" }).run();
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }, [editor]);

  const resizeImageClass = useCallback((sizeClass) => {
    if (!editor || !editor.view) return;
    const imgs = editor.view.dom.querySelectorAll("img.editor-image");
    imgs.forEach(img => {
      img.classList.remove("size-25", "size-50", "size-75", "size-100");
      img.classList.add(sizeClass);
    });
  }, [editor]);

  const setAlignment = useCallback((align) => {
    if (!editor) return;
    editor.chain().focus().setTextAlign(align).run();
    const imgs = editor.view.dom.querySelectorAll("img.editor-image");
    imgs.forEach(img => {
      img.classList.remove("align-left", "align-center", "align-right");
      img.classList.add(`align-${align}`);
    });
  }, [editor]);

  const setColor = useCallback(color => { if (editor) editor.chain().focus().setColor(color).run(); }, [editor]);
  const undo = useCallback(() => { if (editor) editor.chain().focus().undo().run(); }, [editor]);
  const redo = useCallback(() => { if (editor) editor.chain().focus().redo().run(); }, [editor]);

  if (loading) {
    return <Skeleton count={5} height={40} style={{ marginBottom: "10px" }} />;
  }

  if (!editor) return null;

  return (
    <div style={{ position: "relative" }}>
      <div className="editor-toolbar">
        <button className={`editor-btn ${editor.isActive("bold") ? "active" : ""}`} onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={16} /></button>
        <button className={`editor-btn ${editor.isActive("italic") ? "active" : ""}`} onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={16} /></button>
        <button className={`editor-btn ${editor.isActive("underline") ? "active" : ""}`} onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={16} /></button>
        <button className="editor-btn" onClick={setLink}><LinkIcon size={16} /></button>
        <button className="editor-btn" onClick={unsetLink}><X size={16} /></button>
        <button className="editor-btn" onClick={addImage}><ImageIcon size={16} /></button>
        <button className="editor-btn" onClick={() => setAlignment("left")}><AlignLeft size={16} /></button>
        <button className="editor-btn" onClick={() => setAlignment("center")}><AlignCenter size={16} /></button>
        <button className="editor-btn" onClick={() => setAlignment("right")}><AlignRight size={16} /></button>
        <select className="editor-select" onChange={e => editor.chain().focus().setMark("textStyle", { fontSize: e.target.value }).run()} defaultValue="16px">
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
        <select className="editor-select" onChange={e => setColor(e.target.value)} defaultValue="#000000">
          <option value="#000000">سیاه</option>
          <option value="#ff0000">قرمز</option>
          <option value="#0000ff">آبی</option>
          <option value="#008000">سبز</option>
        </select>
        <button className="editor-btn" onClick={undo}><RotateCcw size={16} /></button>
        <button className="editor-btn" onClick={redo}><RotateCw size={16} /></button>
        <div className="image-resize-buttons">
          <button className="editor-btn" onClick={() => resizeImageClass("size-25")}>25%</button>
          <button className="editor-btn" onClick={() => resizeImageClass("size-50")}>50%</button>
          <button className="editor-btn" onClick={() => resizeImageClass("size-75")}>75%</button>
          <button className="editor-btn" onClick={() => resizeImageClass("size-100")}>100%</button>
        </div>
      </div>
      <EditorContent editor={editor} className="editor-content" />
    </div>
  );
}
