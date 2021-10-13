import { isEqual } from "lodash";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import { memo } from "react";

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
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 126.41 67.71"
                className="text-base-content w-10 md:w-12 lg:w-20 lg:p-2"
                fill="currentColor"
                stroke="currentColor"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      className="cls-1"
                      d="M73.7,34.21H19V50.54c0,8.32.81,8.93,9.19,9.6V63a42.33,42.33,0,0,0-17.92.88A41.74,41.74,0,0,0,.86,67.71L.78,64.07a12.57,12.57,0,0,0,7.4-5.85,12.38,12.38,0,0,0,1.37-7.68V17.19A10.4,10.4,0,0,0,8.2,9.6,10.73,10.73,0,0,0,.27,4.94L0,0A37.81,37.81,0,0,0,10.93,4.5a38.35,38.35,0,0,0,16.74.19v3C19.83,8.34,19,8.81,19,17.19V29.74H73.7Z"
                    />
                    <path
                      className="cls-1"
                      d="M73.22,66V1.69H95.4a54.52,54.52,0,0,1,11.46.92q12.24,2.84,17,15.55a43.23,43.23,0,0,1,2.54,15.31q0,13.89-6.1,22.37a23.07,23.07,0,0,1-13.55,9.07A44.38,44.38,0,0,1,96.43,66Zm8.53-7.6h13.7q11.26,0,15.8-4.49,6.38-6.44,6.38-20.57,0-18.33-11.36-22.76-3.4-1.32-11-1.32H81.75Z"
                    />
                    <circle className="cls-2" cx="106.86" cy="28.31" r="3.57" />
                    <polyline
                      className="cls-2"
                      points="93.64 37.29 98.79 35.79 97.29 40.07 103.29 38.79 100.81 42.64 106.86 40.71 105.86 45 110.43 41.57 110.43 46.71 115.71 42.21 118.63 46.71"
                    />
                    <line
                      className="cls-2"
                      x1="27.65"
                      y1="23.83"
                      x2="27.65"
                      y2="40.38"
                    />
                    <line
                      className="cls-2"
                      x1="33.36"
                      y1="20.98"
                      x2="33.36"
                      y2="43.24"
                    />
                    <line
                      className="cls-2"
                      x1="39.08"
                      y1="17.5"
                      x2="39.08"
                      y2="46.71"
                    />
                    <line
                      className="cls-2"
                      x1="44.79"
                      y1="17.5"
                      x2="44.79"
                      y2="46.71"
                    />
                    <line
                      className="cls-2"
                      x1="50.51"
                      y1="17.5"
                      x2="50.51"
                      y2="46.71"
                    />
                    <line
                      className="cls-2"
                      x1="56.22"
                      y1="20.98"
                      x2="56.22"
                      y2="43.24"
                    />
                    <line
                      className="cls-2"
                      x1="61.94"
                      y1="23.83"
                      x2="61.94"
                      y2="40.38"
                    />
                    <circle className="cls-3" cx="107.63" cy="28.5" r="1.09" />
                  </g>
                </g>
              </svg>
              <span className="text-lg ml-2 font-bold cursor-pointer">
                H.D Movie Show
              </span>
            </span>
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
