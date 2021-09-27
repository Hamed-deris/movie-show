import { useEmblaCarousel } from "embla-carousel/react";
import { useRouter } from "next/dist/client/router";
import { useCallback, useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export default function Pagination() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState();
  const [emblaRef, emblaApi] = useEmblaCarousel();
  // ====     ====     ====     ====     ====     functions

  const pages = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    );

  const handlePrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage((p) => p - 1);
      handleParam(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== 50) {
      setCurrentPage((p) => p + 1);
      handleParam(currentPage + 1);
    }
  };

  const handleParam = (p) => {
    router.push({
      pathname: "/filter",
      query: { ...router.query, page: p },
    });
  };

  const handleSlideClick = (index) => {
    emblaApi && emblaApi.clickAllowed() && emblaApi.scrollTo(index - 1);
    setCurrentPage(index);
    handleParam(index);
  };

  // ====     ====     ====     ====     ====     callback
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

  // ====     ====     ====     ====     ====     Effects
  useEffect(() => {
    setCurrentPage(parseInt(router.query.page));
    onSlideClick(parseInt(router.query.page));
  }, [router.query.page]);
  // ====     ====     ====     ====     ====     config
  return (
    <div className="mt-10 flex justify-between">
      <button
        onClick={() => {
          handlePrevPage();
          scrollPrev();
        }}
        className={` flex justify-center items-center ${
          currentPage === 1 && "btn-disabled"
        }`}
      >
        <MdKeyboardArrowLeft className="text-lg md:text-2xl lg:text-3xl" />
      </button>
      <div className="embla w-4/5 lg:w-10/12 px-4" ref={emblaRef}>
        <div className="embla__container gap-1 ">
          {pages(1, 50, 1).map((page) => (
            <button
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
        onClick={() => {
          handleNextPage();
          scrollNext();
        }}
        className={`flex justify-center items-center   ${
          currentPage === 50 && "btn-disabled"
        }`}
      >
        <MdKeyboardArrowRight className="text-lg md:text-2xl lg:text-3xl" />
      </button>
    </div>
  );
}