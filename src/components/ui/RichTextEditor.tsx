import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type Props = { value?: string; onChange?: (v: string) => void; placeholder? : string};

export default function RichTextEditor({ value = "", onChange,placeholder }: Props) {
  const [text, setText] = useState<string>(value);
  const handleChange = (val: string) => {
    setText(val);
    onChange?.(val);
  };
  return <ReactQuill value={text} onChange={handleChange} />; 
}