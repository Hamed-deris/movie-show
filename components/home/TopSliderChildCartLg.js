import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function TopSliderChildCartLg({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const [ACSm, setACSm] = useState("txr-full");
  // ====  ====  ====  ====  ====  ====  ====  ====  Handles
  const handleNext = () => {
    if (current >= length - 3) {
      return setCurrent(0), setACSm("txl-full");
    } else {
      setACSm("txl-full");
      setCurrent((e) => e + 3);
    }
  };
  const handlePre = () => {
    if (current <= 0) {
      return setCurrent(length - 3), setACSm("txr-full");
    } else {
      setACSm("txr-full");
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
    <div className="mx-auto relative overflow-hidden">
      <ul className="flex justify-center w-full h-[60vh] transition-all overflow-hidden bg-gray-600">
        {images.map((img, i) => (
          <li key={i} className="overflow-hidden">
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
