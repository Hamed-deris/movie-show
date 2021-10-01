import { useCallback, useRef } from "react";
import { MdClear, MdSearch } from "react-icons/md";

export default function Search() {
  const searchIn = useRef();
  const handleSearch = useCallback(() => {
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
          <MdClear onClick={handleSearch} />
        </span>
        <span className="btn btn-square btn-ghost text-3xl rounded-none rounded-r-lg">
          <MdSearch />
        </span>
      </div>
    </>
  );
}
