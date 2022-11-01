export default function SelectField({
  register,
  id,
  options,
  label,
  defaultOption,
  validationOptions,
  error,
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
      <select
        {...register(id, { ...validationOptions })}
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""}>{defaultOption}</option>
        {options?.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <p className="text-[#f84147] text-[12px] mt-1 pl-1">{error}</p>}
    </>
  );
}
