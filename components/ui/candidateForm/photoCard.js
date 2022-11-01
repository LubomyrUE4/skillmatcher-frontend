import { useEffect } from "react";
import { ImageField, PurpleBtn } from "../../common";
import CardTitle from "./cardsTitle";
import { useSelector } from "react-redux";
import { getAccountData } from "../../../store/account/account.selectors";

export default function PhotoCard({ register, getValues, watch }) {
  const accountData = useSelector(getAccountData());
  const customWatch = watch("photo");

  useEffect(() => {}, [customWatch]);

  return (
    <div className="w-full h-full p-[20px] bg-gray-800 border border-gray-700 rounded-[20px] flex flex-col mb-[16px] md:mb-0">
      <CardTitle title="Photo" />
      <ImageField
        register={register}
        uploadedFile={getValues("photo")}
        defaultValue={accountData?.photo}
      />
    </div>
  );
}
