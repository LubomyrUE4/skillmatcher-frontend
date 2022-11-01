import { useState, useEffect } from "react";
import PhotoLabelSvg from "../../../svg/photoLabel.svg";
import { CameraIcon } from "@heroicons/react/24/solid";

export default function ImageField({ register, uploadedFile, defaultValue }) {
  const [imageUrl, setImageUrl] = useState(null);
  const isMobile = false;

  useEffect(() => {
    if (isFileList(uploadedFile)) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(uploadedFile[0]);
        fileReader.onload = () => setImageUrl(() => fileReader.result);
    }
  }, [uploadedFile]);

  useEffect(() => {
    setImageUrl(defaultValue);
  }, [defaultValue]);

  function isFileList(fileList) {
    return (
      fileList &&
      typeof fileList === "object" &&
      fileList[0]?.type &&
      Object.keys(fileList).length
    );
  }

  const getLabel = () => {
    if (imageUrl) {
      return (
        <img
          src={imageUrl}
          className="w-[96px] md:w-[144px] h-[96px] md:h-[144px] rounded-full"
        />
      );
    } else {
      return <CameraIcon className="w-[50px]" />;
    }
  };
  return (
    <label style={{ cursor: "pointer" }}>
      <div className="flex justify-center mt-[11px] md:mt-[31px]">
        <div className="w-[96px] md:w-[144px] h-[96px] md:h-[144px] bg-gray-700 rounded-full flex justify-center items-center">
          {getLabel()}
        </div>
      </div>
      <input
        type="file"
        {...register("photo")}
        id="photo"
        style={{ visibility: "hidden" }}
      />
    </label>
  );
}
