import { useState, useEffect } from "react";
import { LightBtn, TextField } from "../../common";
import CardTitle from "./cardsTitle";
import { useSelector } from "react-redux";
import { getAccountData } from "../../../store/account/account.selectors";

export default function SkillsCard({ register, setValue }) {
  const accountData = useSelector(getAccountData());

  useEffect(() => {
    setValue("skills", accountData?.skills?.join(", "));
  }, [accountData]);

  return (
    <div className="flex justify-center">
      <div className="w-full p-6 pb-0 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CardTitle title="Skills" />
        <div className="flex items-center space-x-5 mb-4">
          <div className="w-full">
            <TextField
              register={register}
              id="skills"
              label="Enter skills with a comma"
              placeholder="Skills"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
