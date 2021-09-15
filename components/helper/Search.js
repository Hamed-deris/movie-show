import { useRef } from "react";
import { MdClear, MdSearch } from "react-icons/md";

export default function Search() {
  const searchIn = useRef();
  return (
    <div className="flex border border-opacity-20 rounded-xl mx-2">
      <div className="form-control flex-grow">
        <input
          ref={searchIn}
          type="text"
          placeholder="Search"
          className="input input-ghost"
        />
      </div>
      <button className="btn btn-square btn-ghost text-3xl">
        <MdClear onClick={() => (searchIn.current.value = "")} />
      </button>
      <button className="btn btn-square btn-ghost text-3xl">
        <MdSearch />
      </button>
    </div>
  );
}
