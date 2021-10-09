import Link from "next/link";

function Notfound() {
  return (
    <div className="flex justify-center items-center m-auto">
      <div className="flex mt-12">
        <div className="pr-5 border-r font-bold mr-5 flex">
          <h2 className="my-auto text-5xl">404</h2>
        </div>
        <div>
          <h3 className="text-4xl font-bold mb-3">Page not found</h3>
          <p className="w-[260px] opacity-80">
            Please check the URL in address bar and try again{" "}
          </p>
          <div className=" space-x-2  mt-6">
            <Link href="/">
              <button className="btn ">Home</button>
            </Link>
            <Link href="/contact">
              <button className="btn ">Contact Us</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound;
