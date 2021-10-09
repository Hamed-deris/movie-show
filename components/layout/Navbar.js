import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo } from "react";
import ToggleNavbar from "./ToggleNavbar";
const ChangeTheme = dynamic(() => import("../helper/ChangeTheme"));
const Search = dynamic(() => import("../helper/Search"));

function Navbar() {
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
              <Link href="/discover">
                <li className="btn  btn-ghost btn-sm rounded-btn">Discover</li>
              </Link>
              <Link href="/about">
                <li className="btn btn-ghost btn-sm rounded-btn">About</li>
              </Link>
              <Link href="/contact">
                <li className="btn btn-ghost btn-sm rounded-btn">Contact US</li>
              </Link>
            </ul>
          </div>
          <div className="flex items-center  gap-2">
            <ChangeTheme />
            <ToggleNavbar />
          </div>
          <div className="hidden lg:block">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Navbar, isEqual);
