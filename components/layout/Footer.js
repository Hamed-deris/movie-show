import Link from "next/link";

export default function Navbar() {
  return (
    <footer className="bg-white dark:text-indigo-200 text-indigo-800 dark:bg-gray-800 mt-auto h-32 md:h-16 flex items-center py-3 ">
      <div className="container h-full mx-auto md:flex-row md:px-0 px-4 flex flex-col justify-between items-center ">
        <div className="flex items-center ">
          <h1 className="text-3xl font-bold cursor-pointer">Movie show</h1>
        </div>

        <div className="flex items-center">
          <span> &copy; </span>
          <span> copy </span> right 2021{" "}
          <span className="uppercase font-bold mx-2"> hamed deris</span>
        </div>

        <ul className="flex items-center">
          <li className="cursor-pointer hover:bg-indigo-800 py-1 px-4 rounded hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ">
            <Link href="#">Home</Link>
          </li>
          <li className="cursor-pointer hover:bg-indigo-800 py-1 px-4 rounded hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ">
            <Link href="#">About</Link>
          </li>
          <li className="cursor-pointer hover:bg-indigo-800 py-1 px-4 rounded hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
