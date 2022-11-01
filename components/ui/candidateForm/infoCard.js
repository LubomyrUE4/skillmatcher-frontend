import {
  SelectField,
  PhoneField,
  FileField,
  CheckboxField,
  TextField,
} from "../../common";
import CardTitle from "./cardsTitle";
import { useSelector } from "react-redux";
import { getAccountData } from "../../../store/account/account.selectors";
import getCountries from "../../../utils/getCountries";
import getCountriesPhoneCode from "../../../utils/getCountriesPhoneCode";
import  { LightBtn } from '../../common'

const workPreferenceOptions = [
  {
    value: "Onsite",
    label: "Onsite",
  },
  {
    value: "Remote",
    label: "Remote",
  },
];

const cityOptions = [
  {
    value: "City",
    label: "City",
  },
];

const countryOptions = [
  {
    value: "uk",
    label: "Ukraine",
  },
];

export default function InfoCard({ register, resumeFile }) {
  const accountData = useSelector(getAccountData());

  const handleDownloadResume = () => {
    const a = document.createElement('a')
    a.href = resumeFile
    a.download = 'Resume.' + getFileFormat()
    a.click()
  }

  const getFileFormat = () => {
    return resumeFile.split(',')[0].split('/')[1].split(';')[0]
  }

  return (
    <div className="flex justify-center">
      <div className="w-full p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <CardTitle title="Info" />
        <div className="space-y-3">
          <SelectField
            register={register}
            id="workPreference"
            options={workPreferenceOptions}
            defaultOption={accountData?.workPreference || "Work preference"}
            label="Work preference"
            validationOptions={{
              required: true,
            }}
          />
          <FileField
            register={register}
            id="resume"
            label="Resume"
            // options={{ required: true }}
          />
    {resumeFile ?     <div className='w-full flex justify-end'>
          <div className='w-full max-w-[150px]'>
          <LightBtn 
            label='Download resume'
            handler={handleDownloadResume}
            type='button'
          />
          </div>
    </div> : null }
            {/*<SelectField
            register={register}
            id="city"
            options={cityOptions}
            defaultOption={accountData?.city || "Choose a city"}
            label='City'
          /> */}
          <TextField
            register={register}
            id="city"
            label="City"
            placeholder="Enter your city"
            options={{ required: true }}
          />
          <SelectField
            register={register}
            id="country"
            options={getCountries()}
            defaultOption={accountData?.country || "Choose a country"}
            label="Country"
            validationOptions={{ required: true }}
          />
          <PhoneField
            register={register}
            options={{ required: true }}
            id="phoneNumber"
            label="Phone number"
            placeholder="_ _ _--_ _ _--_ _ _ _"
          />
          <div className="ml-2">
            <CheckboxField
              register={register}
              id="openToTravel"
              label="Open to travel"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
