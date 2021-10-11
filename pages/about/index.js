import dynamic from "next/dynamic";
import Link from "next/link";
const Head = dynamic(() => import("next/head"));

function index() {
  return (
    <>
      <Head>
        <title>Movie Show About Us</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="About" content="About Us " />
        <meta
          name="description"
          content="show movies using TMDB Api update every 10 hovers"
        />
      </Head>
      <div className=" container mx-auto p-6">
        <h1 className="text-6xl font-black text-center tracking-wide capitalize border py-10 rounded-box mb-8">
          movie show
        </h1>
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Hello Dear</h1>
          <p className="mb-5">
            We make this site to help you discover any movie in the world we
            hope you enjoy discover movie in our site .
          </p>
          <p className="mb-5">Our site ues TMDB Api site for get data</p>
          <p className="mb-5">Thank you for your time</p>
          <Link href="/">
            <button className="btn ">Get Started</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default index;
