import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function TopSliderChildCartMd({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const [ACSm, setACSm] = useState("txr-vw");
  // ====  ====  ====  ====  ====  ====  ====  ====  Handles
  const handleNext = () => {
    if (current >= length - 3) {
      return setCurrent(0), setACSm("txl-vw");
    } else {
      setACSm("txl-vw");
      setCurrent((e) => e + 3);
    }
  };
  const handlePre = () => {
    if (current <= 0) {
      return setCurrent(length - 3), setACSm("txr-vw");
    } else {
      setACSm("txr-vw");
      setCurrent((e) => e - 3);
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
    <div className="mx-auto relative">
      <ul className="flex w-full h-[70vh] transition-all overflow-hidden bg-gray-600">
        {images.map((img, i) => (
          <li key={i} className="">
            {i === current && (
              <img
                className={`h-full w-full ${i === current && ACSm}`}
                src={img}
                key={i}
              />
            )}
            {i === current + 1 && (
              <img
                className={`h-full w-full  ${i === current + 1 && ACSm}
                `}
                src={img}
                key={i}
              />
            )}
            {i === current + 2 && (
              <img
                className={`h-full w-full  ${i === current + 2 && ACSm}`}
                src={img}
                key={i}
              />
            )}
          </li>
        ))}
      </ul>

      <button
        className="btn btn-ghost text-4xl text-base-100 -mt-6 absolute top-1/2 "
        onClick={handlePre}
      >
        <IoIosArrowBack />
      </button>
      <button
        className="btn btn-ghost text-4xl text-base-100 -mt-6  absolute top-1/2 right-0"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
