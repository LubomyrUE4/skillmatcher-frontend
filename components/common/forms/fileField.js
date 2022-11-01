export default function FileField({ register, id, label, options }) {
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
      <input
        className="block w-full text-lg text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id={id}
        type="file"
        placeholder="Resume"
        {...register(id, { ...options })}
      />
    </>
  );
}
