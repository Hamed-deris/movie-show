import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import { memo, useMemo } from "react";
const GridMoviePoster = dynamic(() => import("./GridMoviePoster"));
const Pagination = dynamic(() => import("./Pagination"));

function GridMovie({ filterMovieData }) {
  return (
    <div className="p-4 container mx-auto">
      {useMemo(
        () => (
          <ul className="flex flex-wrap gap-4 lg:gap-6 justify-center">
            {filterMovieData.results.map((oneMovie) => (
              <li
                key={oneMovie.id}
                className="h-72 w-[calc(50%-0.5rem)] sm:w-[calc(33%-0.75rem)] lg:w-[calc(25%-1.25rem)] xl:w-[calc(20%-4rem)] border-[3px] border-opacity-30 overflow-hidden ring-4 ring-base-300 shadow-inner"
              >
                <GridMoviePoster movie={oneMovie} />
              </li>
            ))}
          </ul>
        ),
        [filterMovieData.results]
      )}
      <Pagination totalPage={filterMovieData.total_pages} />
    </div>
  );
}
export default memo(GridMovie, isEqual);
