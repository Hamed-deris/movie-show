import { useEffect } from "react";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { themeChange } from "theme-change";

export default function ChangeTheme() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="dropdown dropdown-left">
      <div tabIndex="0" className="m-1 ">
        <div className="text-2xl hover:opacity-70 cursor-pointer">
          <HiOutlineColorSwatch />
        </div>
      </div>

      <ul
        tabIndex="0"
        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box max-h-96 overflow-y-auto"
      >
        <li
          className="btn btn-ghost btn-sm text-left"
          data-set-theme="dark"
          data-act-class="ACTIVECLASS"
        >
          dark
        </li>
        <li
          className="btn btn-ghost btn-sm text-left"
          data-set-theme="light"
          data-act-class="ACTIVECLASS"
        >
          light
        </li>
        <li
          className="btn btn-ghost btn-sm text-left"
          data-set-theme="synthwave"
          data-act-class="ACTIVECLASS"
        >
          synthwave
        </li>
        <li
          className="btn btn-ghost btn-sm text-left"
          data-set-theme="retro"
          data-act-class="ACTIVECLASS"
        >
          retro
        </li>
        <li
          className="btn btn-ghost btn-sm text-left"
          data-set-theme="luxury"
          data-act-class="ACTIVECLASS"
        >
          luxury
        </li>
      </ul>
    </div>
  );
}
