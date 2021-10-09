import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo, useState } from "react";
const MdClear = dynamic(() => import("react-icons/md").then((m) => m.MdClear));
const MdMenu = dynamic(() => import("react-icons/md").then((m) => m.MdMenu));
const Search = dynamic(() => import("../helper/Search"));

const ToggleNavbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <span
        className="text-3xl lg:hidden hover:opacity-70 cursor-pointer"
        onClick={() => setMenu(!menu)}
      >
        {!menu && <MdMenu className=" animate-menu-btn-out " />}
        {menu && <MdClear className=" animate-menu-btn-in" />}
      </span>
      <div
        className={` bg-base-300 shadow absolute top-0 left-0 w-full z-[-20] lg:hidden overflow-hidden flex flex-col mt-16 ${
          menu ? "animate-menu " : "animate-menu-none"
        }`}
      >
        <ul className="p-2 ">
          <Link href="/">
            <li
              onClick={() => setMenu(!menu)}
              className="btn block text-left btn-ghost btn-sm rounded-md"
            >
              Home
            </li>
          </Link>
          <Link href="/discover">
            <li
              onClick={() => setMenu(!menu)}
              className="btn block text-left btn-ghost btn-sm rounded-md"
            >
              Discover
            </li>
          </Link>
          <Link href="/about">
            <li
              onClick={() => setMenu(!menu)}
              className="btn block text-left btn-ghost btn-sm rounded-md"
            >
              About
            </li>
          </Link>
          <Link href="/contact">
            <li
              onClick={() => setMenu(!menu)}
              className="btn block text-left btn-ghost btn-sm rounded-md"
            >
              Contact US
            </li>
          </Link>
        </ul>
        <Search />
      </div>
    </div>
  );
};

export default memo(ToggleNavbar, isEqual);
