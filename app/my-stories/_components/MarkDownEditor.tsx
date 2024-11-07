import React from "react";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { ControllerRenderProps } from "react-hook-form";
import { Story } from "@prisma/client";

interface Props {
  field: ControllerRenderProps<any>;
  id: string;
}

const MarkDownEditor = ({ field, id }: Props) => {
  return <SimpleMDE {...field} id={id} onChange={field.onChange} />;
};

export default MarkDownEditor;
