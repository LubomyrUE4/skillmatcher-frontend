import PhotoCard from "./photoCard";
import SkillsCard from "./skillsCard";
import InfoCard from "./infoCard";
import { PurpleBtn } from "../../common";
import { useForm } from "react-hook-form";
import { localStorageService } from "../../../services";
import { useDispatch, useSelector } from "react-redux";
import { updateAccount } from "../../../store/account/account.actions";
import { getAccountData } from "../../../store/account/account.selectors";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Compressor from "compressorjs";

export default function CandidateForm() {
  const dispatch = useDispatch();
  const accountData = useSelector(getAccountData());
  const { register, handleSubmit, reset, getValues, setValue, watch } = useForm(
    { defaultValues: accountData }
  );
  const [photoState, setPhotoState] = useState("");
  const [resumeState, setResumeState] = useState("");
  const [compressedFile, setCompressedFile] = useState(null);

  useEffect(() => {
    const photo = getValues("photo");
   if (photo && isFile(photo)) {
      console.log("im here!");
      const fileReader = new FileReader();
      fileReader.readAsDataURL(photo[0]);
      fileReader.onload = () => setPhotoState(fileReader.result);
    }
  }, [watch("photo")]);

  useEffect(() => {
    const resume = getValues("resume");

    if (resume && isFile(resume)) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(resume[0]);
      fileReader.onload = () => setResumeState(fileReader.result);
    }
  }, [watch("resume")]);

  useEffect(() => {
    if (accountData) {
      Object.keys(accountData).map((key) => setValue(key, accountData[key]));
      setPhotoState(accountData?.photo);
      setResumeState(accountData?.resume);
    }
  }, [accountData]);

  const handleCandidate = (data) => {
    const newData = {
      ...data,
      id: localStorageService.getUserId(),
      photo: photoState,
      resume: resumeState,
      skills: data.skills.split(","),
    };
    delete newData.role;
    dispatch(updateAccount(newData));
  };

  async function handleUpdate(data) {}

  function isFile(fileList) {
    return (
      fileList &&
      typeof fileList === "object" &&
      fileList[0]?.type &&
      Object.keys(fileList).length
    );
  }

  useEffect(() => {
    console.log("compressed file: ", compressedFile);
  }, [compressedFile]);

  const handleCompressedUpload = (image) => {
    new Compressor(image, {
      quality: 0.8, // 0.6 can also be used, but its not recommended to go below.
      success: (res) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        setCompressedFile(res);
      },
    });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[780px]">
        <form className="space-y-4" onSubmit={handleSubmit(handleCandidate)}>
          <PhotoCard register={register} getValues={getValues} watch={watch} />
          <SkillsCard register={register} setValue={setValue} />
          <InfoCard register={register} resumeFile={resumeState} />
          <div className="flex justify-end">
            <div className="w-28">
              <PurpleBtn type="submit" label="Save" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
