import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useState } from "react";
const ChangeTheme = dynamic(() => import("../helper/ChangeTheme"));
const Search = dynamic(() => import("../helper/Search"));
const MdClear = dynamic(() => import("react-icons/md").then((m) => m.MdClear));
const MdMenu = dynamic(() => import("react-icons/md").then((m) => m.MdMenu));

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <div className="bg-base-300 shadow relative z-50  ">
      <div className="container mx-auto">
        <div className="navbar  border-b border-opacity-10">
          <span className="text-lg font-bold">Movie Show</span>
          <div className="flex-1 px-2 mx-2">
            <ul className="items-stretch hidden lg:flex">
              <Link href="/">
                <li className="btn  btn-ghost btn-sm rounded-btn">Home</li>
              </Link>
              <Link href="/about">
                <li className="btn btn-ghost btn-sm rounded-btn">About</li>
              </Link>
              <Link href="/contact">
                <li className="btn btn-ghost btn-sm rounded-btn">Contact</li>
              </Link>
            </ul>
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
        className={` bg-base-300 shadow absolute top-0 left-0 w-full z-[-20] lg:hidden overflow-hidden flex flex-col mt-16 ${
          menu ? "animate-menu " : "animate-menu-none"
        }`}
      >
        <ul className="py-2 ">
          <Link href="/">
            <li className="btn block text-left btn-ghost btn-sm rounded-btn">
              Home
            </li>
          </Link>
          <Link href="/about">
            <li className="btn block text-left btn-ghost btn-sm rounded-btn">
              About
            </li>
          </Link>
          <Link href="/contact">
            <li className="btn block text-left btn-ghost btn-sm rounded-btn">
              Contact
            </li>
          </Link>
        </ul>
        <Search />
      </div>
    </div>
  );
}
export default memo(Navbar, isEqual);
