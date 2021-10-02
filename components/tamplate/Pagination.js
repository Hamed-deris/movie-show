import { useEmblaCarousel } from "embla-carousel/react";
import { isEqual } from "lodash";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import { memo, useCallback, useEffect, useMemo, useState } from "react";

const MdKeyboardArrowLeft = dynamic(() =>
  import("react-icons/md").then((m) => m.MdKeyboardArrowLeft)
);
const MdKeyboardArrowRight = dynamic(() =>
  import("react-icons/md").then((m) => m.MdKeyboardArrowRight)
);

function Pagination({ totalPage }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  const [emblaRef, emblaApi] = useEmblaCarousel();

  // ====     ====     ====     ====     ====     functions

  const pages = useMemo(
    () => (start, stop, step) =>
      Array.from(
        { length: (stop - start) / step + 1 },
        (_, i) => start + i * step
      ),
    []
  );

  // ====     ====     ====     ====     ====     callback
  const handlePrevPage = useCallback(() => {
    if (currentPage !== 1) {
      setCurrentPage((p) => p - 1);
      handleParam(currentPage - 1);
    }
  }, [currentPage]);

  const handleNextPage = useCallback(() => {
    if (currentPage !== 50) {
      setCurrentPage((p) => p + 1);
      handleParam(currentPage + 1);
    }
  }, [currentPage]);

  const handleParam = (p) => {
    router.push({
      pathname: "/filter",
      query: { ...router.query, page: p },
    });
  };

  const handleSlideClick = useCallback((index) => {
    emblaApi && emblaApi.clickAllowed() && emblaApi.scrollTo(index - 1);
    setCurrentPage(index);
    handleParam(index);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const onSlideClick = useCallback(
    (index) => {
      emblaApi && emblaApi.clickAllowed() && emblaApi.scrollTo(index - 1);
    },
    [emblaApi]
  );

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleNext = () => {
    handleNextPage();
    scrollNext();
  };

  const handlePrev = () => {
    handlePrevPage();
    scrollPrev();
  };

  // ====     ====     ====     ====     ====     Effects
  useEffect(() => {
    setCurrentPage(parseInt(router.query.page));
    onSlideClick(parseInt(router.query.page));
  }, [router.query.page]);
  // ====     ====     ====     ====     ====     config
  return (
    <div className="mt-10 flex justify-between">
      <button
        name="prevPage"
        onClick={handlePrev}
        className={` flex justify-center items-center ${
          currentPage === 1 && "btn-disabled"
        }`}
      >
        <MdKeyboardArrowLeft className="text-lg md:text-2xl lg:text-3xl" />
      </button>
      <div className="embla w-4/5 lg:w-10/12 px-4" ref={emblaRef}>
        <div className="embla__container gap-1 ">
          {pages(1, totalPage, 1).map((page) => (
            <button
              name={`page-${page}`}
              onClick={() => handleSlideClick(page)}
              key={page}
              className={` ${
                page === currentPage ? "btn-active btn-page" : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      <button
        name="nextPage"
        onClick={handleNext}
        className={`flex justify-center items-center   ${
          currentPage === 50 && "btn-disabled"
        }`}
      >
        <MdKeyboardArrowRight className="text-lg md:text-2xl lg:text-3xl" />
      </button>
    </div>
  );
}

export default memo(Pagination, isEqual);
