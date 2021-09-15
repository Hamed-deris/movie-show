import Link from "next/link";
import { useState } from "react";
import { MdClear, MdMenu } from "react-icons/md";
import ChangeTheme from "../helper/ChangeTheme";
import Search from "../helper/Search";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-base-300 shadow  ">
      <div className="container mx-auto">
        <div className="navbar">
          <span className="text-lg font-bold">Movie Show</span>
          <div className="flex-1 px-2 mx-2">
            <div className="items-stretch hidden lg:flex">
              <Link href="#">
                <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
              </Link>
              <Link href="#">
                <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
              </Link>
              <Link href="#">
                <a className="btn btn-ghost btn-sm rounded-btn">About</a>
              </Link>
              <Link href="#">
                <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ChangeTheme />
            <button
              className="text-3xl lg:hidden hover:opacity-70"
              onClick={() => setMenu(!menu)}
            >
              {!menu && <MdMenu className=" animate-menu-btn-out " />}
              {menu && <MdClear className=" animate-menu-btn-in" />}
            </button>
          </div>
          <div className="hidden lg:block">
            <Search />
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden overflow-hidden border-t border-opacity-10 flex flex-col justify-evenly   ${
          menu ? "animate-menu " : "animate-menu-none"
        }`}
      >
        <div className="py-2">
          <Link href="#">
            <a className="btn block text-left btn-ghost btn-sm rounded-btn">
              Home
            </a>
          </Link>
          <Link href="#">
            <a className="btn block text-left btn-ghost btn-sm rounded-btn">
              Portfolio
            </a>
          </Link>
          <Link href="#">
            <a className="btn block text-left btn-ghost btn-sm rounded-btn">
              About
            </a>
          </Link>
          <Link href="#">
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
