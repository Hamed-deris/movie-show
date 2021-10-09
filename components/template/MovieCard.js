import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useState } from "react";
const FaChevronDown = dynamic(() =>
  import("react-icons/fa").then((m) => m.FaChevronDown)
);
const IoMdStar = dynamic(() =>
  import("react-icons/io").then((m) => m.IoMdStar)
);

function MovieCard({ movie }) {
  const [moreInfo, setMoreInfo] = useState(false);
  const [downloadInfo, setDownloadInfo] = useState(false);
  const router = useRouter();

  const handleMovieInfo = useCallback((movieId) => {
    router.push({ pathname: "/info", query: { id: movieId } });
  }, []);

  return (
    <div className="card pb-4 shadow-2xl border border-base-200 overflow-hidden">
      <div className=" relative rounded-full h-96">
        <Image
          className="object-contain relative object-center "
          src={"/t/p/w500/" + movie.poster_path}
          layout="fill"
          alt={movie.title}
        />
      </div>
      <div className="card-body pt-4">
        <h2 className="card-title min-h-16">{movie.title}</h2>
        <div className="flex justify-between items-center font-bold my-2 text-base-300/90">
          <p className="flex items-center">{movie.release_date}</p>
          <p className="flex items-center">
            <span className="mr-1">{movie.vote_average} / 10</span>
            <IoMdStar className="text-warning  text-xl" />
          </p>
        </div>
        <div>
          <div
            onClick={() => setMoreInfo(!moreInfo)}
            className="card-title flex justify-between items-center cursor-pointer "
          >
            <span>overview</span>
            <FaChevronDown
              className={`cursor-pointer hover:animate-pulse transition-all duration-150 ${
                moreInfo && "rotate-180"
              }`}
            />
          </div>

          <p
            className={`opacity-90 text-sm lg:text-base    ${
              moreInfo
                ? "animate-info-full line-clamp-8"
                : "animate-info-full-none line-clamp-2"
            }`}
          >
            {movie.overview}
          </p>
        </div>
      </div>
      <div className="flex justify-center mx-auto gap-2 ">
        <button
          onClick={() => setDownloadInfo(!downloadInfo)}
          className="btn  mx-auto hover:animate-pulse"
        >
          Download
          <FaChevronDown
            className={`cursor-pointer ml-2 transition-all duration-150 ${
              downloadInfo && "rotate-180"
            }`}
          />
        </button>
        <button
          onClick={() => handleMovieInfo(movie.id)}
          className="btn mx-auto hover:animate-pulse"
        >
          more info
        </button>
      </div>
      <div
        className={`overflow-hidden my-3 ${
          downloadInfo ? "animate-download-full" : "animate-download-full-none"
        }`}
      >
        <div className="flex flex-col h-full items-center justify-around">
          <button className="btn btn-wide btn-ghost btn-sm ">
            Download Link 1
          </button>
          <button className="btn btn-wide btn-ghost btn-sm ">
            Download Link 2
          </button>
          <button className="btn btn-wide btn-ghost btn-sm ">
            Download Link 3
          </button>
          <button className="btn btn-wide btn-ghost btn-sm ">
            Download Link 4
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
