import { useEmblaCarousel } from "embla-carousel/react";
import dynamic from "next/dynamic";
import { memo, useCallback, useEffect } from "react";
import useRecursiveTimeout from "../hooks/useRecursiveTimeout";
const isEqual = dynamic(() => import("lodash").then((m) => m.isEqual));

const PosterSlider = dynamic(() => import("./PosterSlider"));

const MdKeyboardArrowLeft = dynamic(() =>
  import("react-icons/md").then((m) => m.MdKeyboardArrowLeft)
);

const MdKeyboardArrowRight = dynamic(() =>
  import("react-icons/md").then((m) => m.MdKeyboardArrowRight)
);

function TopSlider({ topMovies }) {
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
      <ul className="w-full flex">
        {topMovies.results.map((mov) => (
          <li
            className="flex-shrink-0 w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/6  "
            key={mov.id}
          >
            <PosterSlider movie={mov} />
          </li>
        ))}
      </ul>
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
    </div>
  );
}
export default memo(TopSlider, isEqual);
