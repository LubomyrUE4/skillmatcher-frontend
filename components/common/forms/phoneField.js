import SelectField from "./selectField";
import TextField from "./textField";

export default function PhoneField({
  register,
  id,
  options,
  label,
  placeholder,
}) {
  return (
    <>
      {label ? (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {label}
        </label>
      ) : null}
      <div className="w-full flex items-end space-x-2">
        <div className="w-full h-[42px]">
          <TextField
            register={register}
            options={options}
            id={id}
            type="text"
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
}
