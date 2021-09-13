import Link from "next/link";
import { useState } from "react";
import Search from "../helper/Search";
import ChangeLightMode from "../helper/ChangeLightMode";
import { MdClear, MdMenu } from "react-icons/md";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-white shadow dark:bg-gray-800 dark:text-indigo-200 text-indigo-800 ">
      <div className="container mx-auto px-4 md:px-0 flex justify-between items-center h-14 md:h-24">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold cursor-pointer">Movie show</h1>
        </div>
        <ul className="hidden md:flex items-center">
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
        <div className="md:hidden flex items-center">
          <span className="text-2xl">
            <ChangeLightMode />
          </span>
          <button className="text-3xl" onClick={() => setMenu(!menu)}>
            {!menu && <MdMenu className=" animate-menu-btn-out" />}
            {menu && <MdClear className=" animate-menu-btn-in" />}
          </button>
        </div>
        <div className="hidden md:flex md:items-center">
          <span className="text-3xl">
            <ChangeLightMode />
          </span>
          <Search />
        </div>
      </div>
      <div
        className={`md:hidden flex flex-col justify-evenly overflow-hidden   ${
          menu ? "animate-menu " : "animate-menu-none"
        }`}
      >
        <ul className="mx-4">
          <li className="cursor-pointer hover:bg-indigo-800 py-1.5 px-2  rounded-lg hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ">
            <Link href="#">Home</Link>
          </li>
          <li className="cursor-pointer hover:bg-indigo-800 py-1.5 px-2  rounded-lg hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ">
            <Link href="#">About</Link>
          </li>
          <li className="cursor-pointer hover:bg-indigo-800 py-1.5 px-2  rounded-lg hover:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ">
            <Link href="#">Contact</Link>
          </li>
        </ul>
        <div className="px-4">
          <Search />
        </div>
      </div>
    </nav>
  );
}

/* 
<div
          className={`md:hidden overflow-hidden flex flex-col  ${
            menu ? "animate-menu " : "animate-menu-none"
          } `}
        ></div> */
