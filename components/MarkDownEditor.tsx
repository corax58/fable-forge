import "easymde/dist/easymde.min.css";
import { ControllerRenderProps } from "react-hook-form";
import dynamic from "next/dynamic";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  field: ControllerRenderProps<any>;
  id: string;
}

const MarkDownEditor = ({ field, id }: Props) => {
  return <SimpleMDE {...field} id={id} onChange={field.onChange} />;
};

export default MarkDownEditor;
