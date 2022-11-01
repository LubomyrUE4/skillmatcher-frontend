export default function PurpleBtn({ handler, label, type }) {
  return (
    <button
      type={type || "button"}
      className="focus:outline-none text-white bg-purple-701 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      onClick={handler}
    >
      {label}
    </button>
  );
}
