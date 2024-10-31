"use client";
import { Story } from "@prisma/client";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SimpleMDE from "react-simplemde-editor";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import UploadWidget from "../_components/UploadWidget";
import { useUpdateStory } from "../../hooks/stories/useUpdateStory";
import {
  Spinner,
  ColorPicker,
  StoryIntroPreview,
  ErrorMessage,
} from "../../components";
import StoryForm from "../_components/StoryForm";

const CreateStoryPage = () => {
  return <StoryForm />;
};

export default CreateStoryPage;
