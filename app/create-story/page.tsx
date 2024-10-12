"use client";
import { Story } from "@prisma/client";
import "easymde/dist/easymde.min.css";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SimpleMDE from "react-simplemde-editor";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import UploadWidget from "./components/UploadWidget";
import { useCreateStroy } from "../hooks/useCreateStory";
import ColorPicker from "../components/ColorPicker";
import StoryIntroPreview from "../components/StoryIntroPreview";

const CreateStoryPage = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  const formElementClassName = " flex space-y-1 flex-col";
  const createStory = useCreateStroy();

  const handleImage = (imageUrl: string) => {
    setValue("imageUrl", imageUrl);
  };

  const handleColor = (color: string, isPrimary: boolean) => {
    if (isPrimary) {
      setValue("primaryColor", color);
    } else {
      setValue("secondaryColor", color);
    }
  };

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isLoading },
  } = useForm<Story>({
    defaultValues: {
      primaryColor: "#ffffff",
      secondaryColor: "#111111",
    },
  });

  const onSubmit: SubmitHandler<Story> = async (data, e) => {
    e?.preventDefault();
    const output = {
      ...data,
      imagePublicId: imageUrl,
    };
    createStory.mutate(output);
  };
  console.table(watch());

  return (
    <div className="flex ">
      <form
        className="  w-1/2 pb-10   flex flex-col space-y-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={formElementClassName}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            placeholder=""
            className="input-bordered input input-md  "
            {...register("title", { required: true })}
          />
        </div>
        <div className={"flex space-x-4"}>
          <div>
            <label htmlFor=""> Cover Image</label>
            <UploadWidget handleImage={handleImage} />
          </div>
          {watch("imageUrl") && (
            <div className=" flex justify-center items-center w-max h-full">
              <div className=" relative group ">
                <div className=" bg-red-500 p-1 size-max  font-bold text-white rounded-full  group-hover:scale-100 absolute -right-2 -top-2 scale-0   transition-all">
                  <RxCross2 />
                </div>
                <img
                  src={watch("imageUrl")!}
                  alt="cover image"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          )}
        </div>
        <div className={formElementClassName}>
          <div className=" flex  space-x-4">
            <ColorPicker
              handleColor={handleColor}
              isPrimary={true}
              label={"Primary Color"}
              defaultColor="#111111"
            />
            <ColorPicker
              handleColor={handleColor}
              isPrimary={false}
              label="Secondary Color"
              defaultColor="#ffffff"
            />
          </div>
        </div>
        <div className={formElementClassName}>
          <label htmlFor="">Description</label>
          <Controller
            control={control}
            name={"description"}
            render={({ field }) => <SimpleMDE onChange={field.onChange} />}
          />
        </div>

        <button className=" btn btn-secondary">
          {createStory.isPending ? (
            <p>Creating Story...</p>
          ) : (
            <p>Create Story</p>
          )}
        </button>
      </form>
      <StoryIntroPreview story={watch()} />
    </div>
  );
};

export default CreateStoryPage;
