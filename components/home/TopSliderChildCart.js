import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function TopSliderChildCart({ images }) {
  const [current, setCurrent] = useState(0);
  const [sliderClassAnimate, setSliderClassAnimate] = useState({
    next: "txr-full",
    nextNone: "txr-full-none",
  });
  const length = images.length;

  // ====  ====  ====  ====  ====  ====  ====  ====  Handles
  const handleNext = () => {
    if (current === length - 1) {
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
      setCurrent((e) => e + 1);
    }
  };
  const handlePre = () => {
    if (current === 0) {
      return (
        setCurrent(length - 1),
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
      setCurrent((e) => e - 1);
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

  return (
    <div className="relative h-[60vh] w-full bg-gray-400 overflow-hidden ">
      <div className="">
        <img
          className="blur-xl w-full h-full absolute top-0 left-0 "
          src={images[current]}
          alt=""
        />
        <div className="relative bg-gray-700 top-0 left-0 w-5/6 h-[60vh] shadow-xl  m-auto ">
          {images.map((img, i) => (
            <img
              className={`absolute  h-full w-full ${
                i === current
                  ? `${sliderClassAnimate.next}`
                  : `${sliderClassAnimate.nextNone}`
              }`}
              src={img}
              key={i}
            />
          ))}
        </div>
        <button
          className="btn btn-ghost text-4xl text-base-100 -mt-6  absolute top-1/2 right-0"
          onClick={handleNext}
        >
          <IoIosArrowForward />
        </button>
        <button
          className="btn btn-ghost text-4xl text-base-100 -mt-6 absolute top-1/2 "
          onClick={handlePre}
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
}
