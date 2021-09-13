import useDarkMode from "../hooks/useDarkMode";
import { IoMoonOutline } from "react-icons/io5";
import { BsSun } from "react-icons/bs";

export default function ChangeLightMode() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="mx-4 cursor-pointer ">
      {colorTheme === "light" ? (
        <span onClick={() => setTheme("dark")}>
          <IoMoonOutline />
        </span>
      ) : (
        <span onClick={() => setTheme("light")}>
          <BsSun />
        </span>
      )}
    </div>
  );
}
