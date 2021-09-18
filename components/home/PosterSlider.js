import Image from "next/image";
import { IoMdStar } from "react-icons/io";

export default function PosterSlider({ movie }) {
  const {
    id,
    original_title,
    overview,
    release_date,
    vote_average,
    backdrop_path,
    poster_path,
  } = movie;
  return (
    <div className="group  h-[60vh] relative overflow-hidden">
      <Image
        className="object-cover blur-sm "
        layout="fill"
        src={"/t/p/w500/" + backdrop_path}
      />
      <Image
        alt={original_title}
        className="object-contain"
        layout="fill"
        src={"/t/p/w500/" + poster_path}
      />
      <div className="absolute top-0 px-4 min-h-16 w-full text-base-content bg-base-300/70  z-10 capitalize flex justify-between items-center">
        <h2 className=" text-xl sm:text-2xl my-2 tracking-wide font-bold ">
          {original_title}
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

/* 
`/t/p/original/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg`

    <div className="grid ">
      <div className="relative max-h-60 max-w-full  overflow-hidden">
        <img
          className="object-cover bg-cover"
          src={
            "https://image.tmdb.org/t/p/w500/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg"
          }
          alt="poster"
        />
        <p className="absolute">rate : "vote_average": 7.3</p>
      </div>
      <div>
        <p>Movie name : "original_title": "Don't Breathe 2"</p>
        <p>
          Description : "original_title": "Don't Breathe 2", "overview": "The
          Blind Man has been hiding out for several years in an isolated cabin
          and has taken in and raised a young girl orphaned from a devastating
          house fire. Their quiet life together is shattered when a group of
          criminals kidnap the girl, forcing the Blind Man to leave his safe
          haven to save her."
        </p>
      </div>
    </div> */
/* 
{
      "adult": false,
      "backdrop_path": "/pUc51UUQb1lMLVVkDCaZVsCo37U.jpg", 
      "genre_ids": [
        53,
        27
      ],
      "id": 482373,
      "original_language": "en",
      "original_title": "Don't Breathe 2",
      "overview": "The Blind Man has been hiding out for several years in an isolated cabin and has taken in and raised a young girl orphaned from a devastating house fire. Their quiet life together is shattered when a group of criminals kidnap the girl, forcing the Blind Man to leave his safe haven to save her.",
      "popularity": 905.308,
      "poster_path": "/aOu6PJVO9RyGAzdUwG6fupu0gpz.jpg",
      "release_date": "2021-08-12",
      "title": "Don't Breathe 2",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 75
    } */

//  backup

{
  /* <div className="flex gap-3 px-5 py-2.5 right-0 rounded-tl-2xl  justify-evenly items-center text-base-content bg-base-200/80 absolute bottom-0">
    <span className="text-base-content text-xl">6.8/10</span>
    <span className="text-warning text-2xl">
      <IoMdStar />
    </span>
  </div> */
}
