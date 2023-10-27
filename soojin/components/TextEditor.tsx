import { MDEditorProps } from "@uiw/react-md-editor";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

const MDEditor = dynamic<MDEditorProps>(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

export type EditorProps = MDEditorProps

export const TextEditor = ({
  ...rest
}: MDEditorProps)=> {
    return (
      <div className="w-full mx-auto">
        <MDEditor
                {...rest}
                enableScroll={true}
                preview="live"
        />
      </div>

  )
}