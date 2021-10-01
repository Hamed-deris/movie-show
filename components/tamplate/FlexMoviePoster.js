import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import Image from "next/image";
import { memo } from "react";

const IoMdStar = dynamic(() =>
  import("react-icons/io").then((m) => m.IoMdStar)
);
function FlexMoviePoster({ movie }) {
  const {
    original_title,
    overview,
    release_date,
    vote_average,
    poster_path,
    title,
  } = movie;
  return (
    <div className="group h-full relative overflow-hidden">
      <Image
        alt={title}
        className="object-contain"
        layout="fill"
        src={"/t/p/w500/" + poster_path}
      />
      <div
        className="absolute top-0 px-1 min-h-14 w-full text-base-300 bg-base-content/80 text-sm z-10 capitalize transition-all duration-500 -translate-y-48 
        group-focus:-translate-y-0 group-hover:-translate-y-0"
      >
        <h2 className="my-1 text-sm tracking-wide font-bold line-clamp-2 md:text-base ">
          {title}
        </h2>
      </div>
      <div
        className="absolute bottom-0 px-2 w-full text-base-content bg-base-300  tracking-wide text-justify leading-5 z-10 capitalize text-xs
          transition-all duration-500 translate-y-96 
        group-focus:-translate-y-0 group-hover:-translate-y-0 py-1.5 line-clamp-4 "
      >
        <div className="text-primary flex justify-between text-xs my-1">
          <p className="tracking-wide text-base-content">{release_date}</p>
          <div className="flex  items-center ">
            <p className="text-base-content ">{vote_average} / 10</p>
            <p className="text-warning mx-auto ">
              <IoMdStar />
            </p>
          </div>
        </div>
        {overview}
      </div>
    </div>
  );
}

export default memo(FlexMoviePoster, isEqual);
