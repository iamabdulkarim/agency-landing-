const buttons = [
  {
    label: "Download",
    href: "#",
    className:
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800",
  },
  {
    label: "View on GitHub",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
      >
        <path d="..." />
      </svg>
    ),
    className:
      "inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
  },
  {
    label: "Get Figma file",
    href: "#",
    icon: (
      <svg
        className="w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
      >
        <path fill="#0acf83" d="..." />
        {/* other paths */}
      </svg>
    ),
    className:
      "inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700",
  },
  {
    label: "Free trial for 30 days",
    href: "#",
    className:
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800",
  },
];

export default function Button() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-2 items-center justify-center">
      {buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.href}
          target="_blank"
          className={btn.className}
        >
          {btn.icon && btn.icon}
          {btn.label}
        </a>
      ))}
    </div>
  );
}
