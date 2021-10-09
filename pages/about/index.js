import Link from "next/link";
function index() {
  return (
    <div className=" container mx-auto p-6">
      <h1 className="text-6xl font-black text-center tracking-wide capitalize border py-10 rounded-box mb-8">
        movie show
      </h1>
      <div className="">
        <h1 className="mb-5 text-5xl font-bold">Hello Dear</h1>
        <p className="mb-5">
          We make this site to help ue discover any movie in the world we hope
          you enjoy discover movie in over site .
        </p>
        <p className="mb-5">Our site ues TMDB Api site for get data</p>
        <p className="mb-5">Thank you for your time</p>
        <Link href="/">
          <button className="btn btn-primary">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default index;
