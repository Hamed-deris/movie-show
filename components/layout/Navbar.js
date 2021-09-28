import Link from "next/link";
import { useState } from "react";
import { MdClear, MdMenu } from "react-icons/md";
import ChangeTheme from "../helper/ChangeTheme";
import Search from "../helper/Search";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-base-300 shadow relative z-50  ">
      <div className="container mx-auto">
        <div className="navbar  border-b border-opacity-10">
          <span className="text-lg font-bold">Movie Show</span>
          <div className="flex-1 px-2 mx-2">
            <div className="items-stretch hidden lg:flex">
              <Link href="/">
                <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
              </Link>
              <Link href="/about">
                <a className="btn btn-ghost btn-sm rounded-btn">About</a>
              </Link>
              <Link href="/contact">
                <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <ChangeTheme />
            <span
              className="text-3xl lg:hidden hover:opacity-70 cursor-pointer"
              onClick={() => setMenu(!menu)}
            >
              {!menu && <MdMenu className=" animate-menu-btn-out " />}
              {menu && <MdClear className=" animate-menu-btn-in" />}
            </span>
          </div>
          <div className="hidden lg:block">
            <Search />
          </div>
        </div>
      </div>
      <div
        className={` fixed bg-base-300 shadow top-14 left-0 w-full z-40 lg:hidden overflow-hidden flex flex-col justify-evenly   ${
          menu ? "animate-menu " : "animate-menu-none"
        }`}
      >
        <div className="py-2">
          <Link href="/">
            <a className="btn block text-left btn-ghost btn-sm rounded-btn">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="btn block text-left btn-ghost btn-sm rounded-btn">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="btn block text-left btn-ghost btn-sm rounded-btn">
              Contact
            </a>
          </Link>
        </div>
        <Search />
      </div>
    </div>
  );
}
