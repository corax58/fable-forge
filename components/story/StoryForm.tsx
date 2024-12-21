"use client";
import ErrorMessage from "@/components/ErrorMessage";
import ColorPicker from "@/components/story/ColorPicker";
import StoryIntroPreview from "@/components/story/StoryIntroPreview";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UploadWidget from "@/components/UploadWidget";
import { useCreateStory } from "@/hooks/stories/useCreateStory";
import { Story } from "@prisma/client";
import "easymde/dist/easymde.min.css";
import { LoaderCircle } from "lucide-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { RxCross2 } from "react-icons/rx";
import { useUpdateStory } from "../../hooks/stories/useUpdateStory";
import MarkDownEditor from "../MarkDownEditor";

const StoryForm = ({ Story }: { Story?: Story }) => {
  const formElementClassName = " flex space-y-2 flex-col  ";

  const createStory = useCreateStory();
  const updateStory = useUpdateStory({ storyId: Story?.id });

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

  const defaultValues = Story
    ? Story
    : {
        primaryColor: "#ffffff",
        secondaryColor: "#000000",
      };

  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Story>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Story> = async (data, e) => {
    e?.preventDefault();
    Story ? updateStory.mutate(data) : createStory.mutate(data);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-5 ">
      <form
        className="  w-full pb-10   flex flex-col space-y-3 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={formElementClassName}>
          <label htmlFor="title">Title</label>
          <Input
            id="title"
            placeholder=""
            className="input-bordered input input-md  "
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "The title must be longer than 3 characters",
              },
            })}
          />
          {errors.title && <ErrorMessage text={errors.title.message!} />}
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
          <div className=" flex  flex-col md:flex-row gap-4">
            <ColorPicker
              handleColor={handleColor}
              isPrimary={true}
              label={"Primary Color"}
              defaultColor={Story ? Story.primaryColor! : "#ffffff"}
            />
            <ColorPicker
              handleColor={handleColor}
              isPrimary={false}
              label="Secondary Color"
              defaultColor={Story ? Story.secondaryColor! : "#000000"}
            />
          </div>
        </div>
        <div className={formElementClassName}>
          <label htmlFor="description">Description</label>
          <Controller
            control={control}
            name={"description"}
            rules={{
              required: "Description is required",
            }}
            render={({ field }) => (
              <MarkDownEditor id="description" field={field} />
            )}
          />
          {errors.description && (
            <ErrorMessage text={errors.description.message!} />
          )}
        </div>

        <Button className=" btn btn-secondary" disabled={updateStory.isPending}>
          {updateStory.isPending || createStory.isPending ? (
            <LoaderCircle className="animate-spin text-slate-500" />
          ) : Story ? (
            <p>Edit Story</p>
          ) : (
            <p>Create Story</p>
          )}
        </Button>
      </form>
      <div className="w-full">
        <StoryIntroPreview story={watch()} />
      </div>
    </div>
  );
};

export default StoryForm;
