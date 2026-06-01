import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect, useCallback } from 'react';
import {
  Bold, Italic, List, ListOrdered, Link2, Image as ImageIcon,
  Heading1, Heading2, Heading3, Undo, Redo, Minus,
} from 'lucide-react';

const ToolbarBtn = ({ onClick, active, title, children }) => (
  <button
    type="button"
    onMouseDown={(e) => { e.preventDefault(); onClick(); }}
    title={title}
    className={`p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer ${
      active ? 'bg-[#4F7A28] text-white hover:bg-[#3d6020]' : 'text-gray-700'
    }`}
  >
    {children}
  </button>
);

export default function TipTapEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-[#4F7A28] underline' } }),
      Image.configure({ HTMLAttributes: { class: 'max-w-full rounded-lg my-4' } }),
      Placeholder.configure({ placeholder: 'Rédigez votre article ici...' }),
    ],
    content: value || '',
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none min-h-[400px] p-4 focus:outline-none',
      },
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || '', false);
    }
  }, [value, editor]);

  const addLink = useCallback(() => {
    const url = window.prompt('URL du lien :');
    if (!url) return;
    editor?.chain().focus().setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    const url = window.prompt('URL de l\'image :');
    if (!url) return;
    editor?.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 px-3 py-2 border-b border-gray-200 bg-gray-50">
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={editor.isActive('heading', { level: 1 })} title="Titre H1">
          <Heading1 size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={editor.isActive('heading', { level: 2 })} title="Titre H2">
          <Heading2 size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={editor.isActive('heading', { level: 3 })} title="Titre H3">
          <Heading3 size={16} />
        </ToolbarBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Gras">
          <Bold size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italique">
          <Italic size={16} />
        </ToolbarBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolbarBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Liste à puces">
          <List size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Liste numérotée">
          <ListOrdered size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} active={false} title="Séparateur">
          <Minus size={16} />
        </ToolbarBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolbarBtn onClick={addLink} active={editor.isActive('link')} title="Lien">
          <Link2 size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={addImage} active={false} title="Image (URL)">
          <ImageIcon size={16} />
        </ToolbarBtn>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} active={false} title="Annuler">
          <Undo size={16} />
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} active={false} title="Refaire">
          <Redo size={16} />
        </ToolbarBtn>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} />
    </div>
  );
}
