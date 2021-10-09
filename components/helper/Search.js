import { useRouter } from "next/dist/client/router";
import { useCallback, useRef } from "react";
import { MdClear, MdSearch } from "react-icons/md";

export default function Search() {
  const searchIn = useRef();
  const router = useRouter();

  const handleSearch = useCallback((searchVal) => {
    router.push({
      pathname: "/search",
      query: {
        searchQuery: searchVal,
      },
    });
  }, []);

  const handleSearchEmpty = useCallback(() => {
    searchIn.current.value = "";
  }, [searchIn]);

  return (
    <>
      <div className="flex border border-opacity-20 rounded-xl mx-2">
        <div className="form-control flex-grow overflow-hidden">
          <input
            ref={searchIn}
            type="text"
            placeholder="Search"
            className="input input-ghost"
          />
        </div>
        <span className="btn btn-square btn-ghost text-3xl rounded-none">
          <MdClear onClick={handleSearchEmpty} />
        </span>
        <span className="btn btn-square btn-ghost text-3xl rounded-none rounded-r-lg">
          <MdSearch onClick={() => handleSearch(searchIn.current.value)} />
        </span>
      </div>
    </>
  );
}
