export default function CheckboxField({ register, id, label }) {
  return (
    <fieldset>
      <div className="flex items-center mb-4">
        <input
          id={id}
          {...register(id)}
          type="checkbox"
          value=""
          className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor={id}
          className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </fieldset>
  );
}
