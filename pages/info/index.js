import Image from "next/image";
import { IoMdStar } from "react-icons/io";
const Head = dynamic(() => import("next/head"));
import dynamic from "next/dynamic";

export default function MovieInfo({ movieInfo }) {
  const handleDataToStr = (dataToStr) => {
    let g = "";
    dataToStr.map((m) => (g += m.name + ", "));
    return g.slice(0, g.length - 2);
  };

  return (
    <>
      <Head>
        <title>Movie Show info</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="info" content="movie movies film tv info " />
        <meta
          name="description"
          content="show movies using TMDB Api update every 10 hovers"
        />
      </Head>
      <div className=" container p-4 mx-auto md:grid md:grid-cols-3">
        <div className="relative h-96 w-full col-span-1 md:h-full md:!p-10 ">
          <Image
            className="object-contain relative object-top md:!pt-10 xl:!p-10"
            src={"/t/p/w500/" + movieInfo.poster_path}
            layout="fill"
            alt={movieInfo.title}
          />
        </div>
        {/* ====    ====    ====    ====    ====     body cord  */}

        <div className="card-body col-span-2">
          <h2 className="card-title my-3 lg:text-3xl">{movieInfo.title}</h2>

          <div>
            <div className="space-y-2 opacity-80">
              <p>
                <span className="font-semibold">Release Date : </span>
                {movieInfo.release_date}
              </p>
              <p className="flex">
                <span className="font-semibold">Name : </span>
                <span className="mr-1">{movieInfo.vote_average} / 10</span>
                <IoMdStar className="text-warning  text-xl" />
              </p>
              <p>
                <span className="font-semibold">Name : </span>
                {movieInfo.original_title}
              </p>
              <p>
                <span className="font-semibold">language : </span>
                {handleDataToStr(movieInfo.spoken_languages)}
              </p>
              <p>
                <span className="font-semibold">genres : </span>
                {handleDataToStr(movieInfo.genres)}
              </p>
              <p>
                <span className="font-semibold">popularity : </span>
                {movieInfo.popularity}
              </p>
              <p>
                <span className="font-semibold">status : </span>
                {movieInfo.status}
              </p>
              <p>
                <span className="font-semibold">budget : </span>
                {movieInfo.budget} $
              </p>
              <p>
                <span className="font-semibold">Production Companies : </span>
                {handleDataToStr(movieInfo.production_companies)}
              </p>
            </div>
            {/* ====    ====    ====    ====    ====     download link  */}
            <div
              onClick={() => setMoreInfo(!moreInfo)}
              className="card-title my-4 flex justify-between items-center cursor-pointer "
            >
              <span>overview</span>
            </div>
            <p className="">{movieInfo.overview}</p>
          </div>
          <div className="my-6 text-center">
            <h3 className="card-title"> Download Links</h3>
            <div className="text-info">
              <button className="btn btn-ghost btn-sm ">Download Link 1</button>
              <button className="btn btn-ghost btn-sm ">Download Link 2</button>
              <button className="btn btn-ghost btn-sm ">Download Link 3</button>
              <button className="btn btn-ghost btn-sm ">Download Link 4</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWJmOGNkY2I3M2YxMmI1NzU4OTg4ODk3M2EwY2ZiNCIsInN1YiI6IjYxMjZhNjNmZDhlMjI1MDA0MjU0ZWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR0QfsEGCU_sAe8ETuB-vhtnL7VNb7h8SQYB0314ZU",
      "content-type": "application/json",
    },
  });
  const movieInfo = await res.json();
  if (!movieInfo) {
    return {
      notFound: true,
    };
  }
  return {
    props: { movieInfo },
  };
}
