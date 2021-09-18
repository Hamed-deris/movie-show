import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PosterSlider from "./PosterSlider";

export default function TopSliderChildCartMd({ images, movie }) {
  const [current, setCurrent] = useState(0);
  const [sliderClassAnimate, setSliderClassAnimate] = useState({
    next: "txr-full",
    nextNone: "txr-full-none",
  });
  const length = movie.length;
  // ====  ====  ====  ====  ====  ====  ====  ====  Handles

  const handleNext = () => {
    if (current === length - 2) {
      return (
        setCurrent(0),
        setSliderClassAnimate({
          next: "txr-full",
          nextNone: "txr-full-none",
        })
      );
    } else {
      setSliderClassAnimate({
        next: "txr-full",
        nextNone: "txr-full-none",
      });
      setCurrent((e) => e + 2);
    }
  };
  const handlePre = () => {
    if (current === 0) {
      return (
        setCurrent(length - 2),
        setSliderClassAnimate({
          next: "txl-full",
          nextNone: "txl-full-none",
        })
      );
    } else {
      setSliderClassAnimate({
        next: "txl-full",
        nextNone: "txl-full-none",
      });
      setCurrent((e) => e - 2);
    }
  };

  // ====  ====  ====  ====  ====  ====  ====  ====  Effect
  useEffect(() => {
    const slider = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => {
      clearTimeout(slider);
    };
  }, [handleNext]);

  // ====  ====  ====  ====  ====  ====  ====  ====  return
  return (
    <div
      className={`relative grid grid-cols-2 gap-1 h-[60vh] w-full overflow-hidden`}
    >
      <div className={`relative overflow-hidden`}>
        {movie &&
          movie.map((mov, i) => (
            <div
              key={i}
              className={`absolute w-full left-0 top-0 ${
                i === current
                  ? `${sliderClassAnimate.next}`
                  : `${sliderClassAnimate.nextNone}`
              }`}
            >
              <PosterSlider movie={mov} />
            </div>
          ))}
      </div>
      <div className={`relative  overflow-hidden`}>
        {movie &&
          movie.map((mov, i) => (
            <div
              key={i}
              className={`absolute w-full left-0 top-0 ${
                i === current + 1
                  ? `${sliderClassAnimate.next}`
                  : `${sliderClassAnimate.nextNone}`
              }`}
            >
              <PosterSlider movie={mov} />
            </div>
          ))}
      </div>
      <button
        className="btn btn-ghost text-4xl z-20 text-base-100 -mt-6  absolute top-1/2 right-0"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
      <button
        className="btn btn-ghost text-4xl z-20 text-base-100 -mt-6 absolute top-1/2 "
        onClick={handlePre}
      >
        <IoIosArrowBack />
      </button>
    </div>
  );
}

{
  /* <div
      className={`relative grid grid-cols-2 gap-1 h-[60vh] w-full overflow-hidden`}
    >
      <div className={`relative h-[60vh] overflow-hidden`}>
        {movie &&
          movie.map((mov, i) => (
            <div
              key={i}
              className={`absolute w-full left-0 top-0 ${
                i === current
                  ? `${sliderClassAnimate.next}`
                  : `${sliderClassAnimate.nextNone}`
              }`}
            >
              <PosterSlider movie={mov} />
            </div>
          ))}
      </div>
      <div className={`relative h-[60vh] z-20 overflow-hidden`}>
        {movie &&
          movie.map((mov, i) => (
            <div
              key={i}
              className={`absolute w-full left-0 top-0 ${
                i === current + 1
                  ? `${sliderClassAnimate.next}`
                  : `${sliderClassAnimate.nextNone}`
              }`}
            >
              <PosterSlider movie={mov} />
            </div>
          ))}
      </div>
      <button
        className="btn btn-ghost text-4xl z-20 text-base-100 -mt-6  absolute top-1/2 right-0"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
      <button
        className="btn btn-ghost text-4xl z-20 text-base-100 -mt-6 absolute top-1/2 "
        onClick={handlePre}
      >
        <IoIosArrowBack />
      </button>
    </div> */
}
