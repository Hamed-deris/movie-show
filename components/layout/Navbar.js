import { isEqual } from "lodash";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useCallback } from "react";

const ToggleNavbar = dynamic(() => import("./ToggleNavbar"));
const ChangeTheme = dynamic(() => import("../helper/ChangeTheme"));
const Search = dynamic(() => import("../helper/Search"));

function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-base-300 shadow relative z-50  ">
      <div className="container mx-auto">
        <div className="navbar  border-b border-opacity-10">
          <Link href="/">
            <span className="text-lg font-bold cursor-pointer">Movie Show</span>
          </Link>
          <div className="flex-1 px-2 mx-2">
            <ul className="items-stretch hidden lg:flex">
              <Link href="/">
                <li className="btn  btn-ghost btn-sm rounded-btn">Home</li>
              </Link>
              <Link href="/discover?page=1">
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
