export default function TextField({
  register,
  id,
  type,
  label,
  placeholder,
  options,
  error,
}) {
  return (
    <div className="mb-6">
      {label ? (
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          {label}
        </label>
      ) : null}

      <input
        {...register(id, { ...options })}
        type={type || "text"}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
      {error && <p className="text-[#f84147] text-[12px] mt-1 pl-1">{error}</p>}
    </div>
  );
}
