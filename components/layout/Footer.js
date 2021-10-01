import Link from "next/link";
import { memo } from "react";

function Footer() {
  return (
    <footer className="bg-base-300 text-base-content mt-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center container mx-auto gap-3">
        <h1 className="text-xl font-semibold">Movie Show</h1>
        <p>Copyright © 2021 - All right reserved</p>
        <p>by H.Design</p>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
export default memo(Footer);
