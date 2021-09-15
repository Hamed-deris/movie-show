import Link from "next/link";

export default function Navbar() {
  return (
    <footer className="bg-base-300 text-base-content mt-auto p-4">
      <div className="flex flex-col md:flex-row md:justify-between items-center container mx-auto gap-3">
        <h1 className="text-xl font-semibold">Movie Show</h1>
        <p>Copyright © 2021 - All right reserved</p>
        <div className="flex gap-4">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
