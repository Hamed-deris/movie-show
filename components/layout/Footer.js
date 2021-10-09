import Link from "next/link";
import { memo } from "react";

function Footer() {
  return (
    <footer className=" bg-base-300 text-base-content mt-auto p-4">
      <div className="container mx-auto flex flex-col gap-3 items-center lg:grid lg:grid-cols-3">
        <h1 className="text-xl lg:text-2xl font-semibold">Movie Show</h1>
        <p className="m-auto">
          Copyright © 2021 - All right reserved by{" "}
          <span className="text-info">H.Design</span>
        </p>
        <ul className="flex gap-5 lg:gap-0 lg:ml-auto">
          <li className="btn btn-ghost btn-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="btn btn-ghost btn-sm">
            <Link href="/discover">Discover</Link>
          </li>
          <li className="btn btn-ghost btn-sm">
            <Link href="/about">About</Link>
          </li>
          <li className="btn btn-ghost btn-sm">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default memo(Footer);
