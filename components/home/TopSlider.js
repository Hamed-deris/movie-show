import { useEmblaCarousel } from "embla-carousel/react";
import { isEqual } from "lodash";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import Image from "next/image";
import { memo, useCallback, useEffect, useMemo } from "react";
import useRecursiveTimeout from "../hooks/useRecursiveTimeout";

const MdKeyboardArrowLeft = dynamic(() =>
  import("react-icons/md").then((m) => m.MdKeyboardArrowLeft)
);

const MdKeyboardArrowRight = dynamic(() =>
  import("react-icons/md").then((m) => m.MdKeyboardArrowRight)
);

function TopSlider({ topMovies }) {
  const router = useRouter();

  const handleMovieInfo = useCallback((movieId) => {
    router.push({ pathname: "/info", query: { id: movieId } });
  }, []);

  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    speed: 40,
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);
  const { play } = useRecursiveTimeout(autoplay, 4000);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="embla relative left-0" ref={viewportRef}>
      {useMemo(
        () => (
          <ul className="w-full flex">
            {topMovies.results.map((mov) => (
              <li
                className="relative h-96 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6  "
                key={mov.id}
              >
                <Image
                  onClick={() => handleMovieInfo(mov.id)}
                  alt={mov.title}
                  className="object-contain "
                  layout="fill"
                  src={"/t/p/w500/" + mov.poster_path}
                />
              </li>
            ))}
          </ul>
        ),
        [topMovies.results]
      )}
      {useMemo(
        () => (
          <>
            <span
              className="absolute z-30 top-1/2 -mt-10 text-5xl cursor-pointer hover:opacity-90"
              onClick={() => scrollPrev()}
            >
              <MdKeyboardArrowLeft />
            </span>
            <span
              className="absolute z-30 top-1/2 right-0 -mt-10 text-5xl cursor-pointer hover:opacity-90"
              onClick={() => scrollNext()}
            >
              <MdKeyboardArrowRight />
            </span>
          </>
        ),
        [scrollPrev, scrollNext]
      )}
    </div>
  );
}
export default memo(TopSlider, isEqual);
