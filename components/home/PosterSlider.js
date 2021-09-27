import Image from "next/image";
import { IoMdStar } from "react-icons/io";

export default function PosterSlider({ movie }) {
  const { title, overview, release_date, vote_average, poster_path } = movie;
  return (
    <div className="group h-[60vh] relative overflow-hidden">
      <Image
        className="object-cover blur-sm "
        layout="fill"
        src={"/t/p/w500/" + poster_path}
      />
      <Image
        alt={title}
        className="object-contain"
        layout="fill"
        src={"/t/p/w500/" + poster_path}
      />
      <div className="absolute top-0 px-4 min-h-16 w-full text-base-content bg-base-300/70  z-10 capitalize flex justify-between items-center">
        <h2 className=" text-xl sm:text-2xl my-2 tracking-wide font-bold ">
          {title}
        </h2>
        <div className="text-primary flex-shrink-0 w-28 flex flex-col justify-evenly h-full ">
          <p className="sm:text-lg font-semibold tracking-wide text-base-content">
            {release_date}
          </p>
          <div className="flex  items-center">
            <p className="text-base-content ">{vote_average} / 10</p>
            <p className="text-warning mx-auto sm:text-2xl">
              <IoMdStar />
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 px-6 w-full text-base-content bg-base-300  tracking-wide text-justify leading-7 z-10 capitalize sm:text-lg
          transition-all duration-500 translate-y-96 
        group-focus:-translate-y-0 group-hover:-translate-y-0 py-2 line-clamp-8 "
      >
        {overview}
      </div>
    </div>
  );
}
