import { useEffect, useState } from "react";

export default function TopSliderChildCartMd({ images }) {
  const [current, setCurrent] = useState(0);
  const length = images.length;
  const [ACSm, setACSm] = useState({
    next: "txr-vw",
    nextNone: "txr-vw-none",
  });
  // ====  ====  ====  ====  ====  ====  ====  ====  Handles
  const handleNext = () => {
    if (current >= length - 3) {
      return (
        setCurrent(0),
        setACSm({
          next: "txr-vw",
          nextNone: "txr-vw-none",
        })
      );
    } else {
      setACSm({
        next: "txr-vw",
        nextNone: "txr-vw-none",
      });
      setCurrent((e) => e + 3);
    }
  };
  const handlePre = () => {
    if (current <= 0) {
      return (
        setCurrent(length - 3),
        setACSm({
          next: "txl-full",
          nextNone: "txl-full-none",
        })
      );
    } else {
      setACSm({
        next: "txl-full",
        nextNone: "txl-full-none",
      });
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
    <div className="mx-auto">
      <div className="flex w-full h-[70vh] transition-all overflow-hidden bg-gray-600">
        {images.map((img, i) => (
          <>
            {i === current && (
              <img
                className={`w-1/3 h-full ${
                  i === current ? `${ACSm.next}` : `${ACSm.nextNone}`
                }`}
                src={img}
                key={i}
              />
            )}
            {i === current + 1 && (
              <img
                className={`w-1/3 h-full  ${
                  i === current + 1 ? `${ACSm.next}` : `${ACSm.nextNone}`
                }
                `}
                src={img}
                key={i}
              />
            )}
            {i === current + 2 && (
              <img
                className={`w-1/3 h-full  ${
                  i === current + 2 ? `${ACSm.next}` : `${ACSm.nextNone}`
                }`}
                src={img}
                key={i}
              />
            )}
          </>
        ))}
      </div>

      <div onClick={() => handlePre()} className="btn">
        Prev
      </div>
      <div onClick={() => handleNext()} className="btn">
        next
      </div>
    </div>
  );
}
