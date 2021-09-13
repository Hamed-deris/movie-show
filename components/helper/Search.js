import { useRef } from "react";
import {
  MdClear,
  MdDelete,
  MdExitToApp,
  MdExplicit,
  MdSearch,
} from "react-icons/md";

export default function Search() {
  const search = useRef();
  return (
    <div className="relative flex items-center border  rounded-lg px-3 dark:border-indigo-900 border-indigo-200">
      <input
        ref={search}
        type="text"
        name="search"
        id="search"
        placeholder="Movie name"
        className="peer w-full py-3  focus:outline-none focus:border-t  placeholder-indigo-300 !bg-transparent focus:border-indigo-800 "
      />
      <MdClear
        onClick={() => (search.current.value = "")}
        className="text-indigo-300 text-3xl hover:text-indigo-500 cursor-pointer"
      />
      <MdSearch
        className="
      text-indigo-300 text-3xl hover:text-indigo-500 cursor-pointer"
      />
    </div>
  );
}
