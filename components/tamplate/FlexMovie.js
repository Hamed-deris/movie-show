import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import { memo } from "react";

const FlexMoviePoster = dynamic(() => import("./FlexMoviePoster"));

function FlexMovie({ genresName, genresMovie }) {
  return (
    <div className="p-4 container mx-auto ">
      <h2 className="font-semibold tracking-wider pt-2 pl-3 uppercase rounded-t-md bg-base-200 cursor-pointer ">
        {genresName}
      </h2>
      <ul className="flex overflow-x-auto w-full bg-base-200 p-2 gap-1 h-52">
        {genresMovie.map((oneMovie) => (
          <li key={oneMovie.id} className="w-32 overflow-hidden flex-shrink-0">
            <FlexMoviePoster movie={oneMovie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default memo(FlexMovie, isEqual);
