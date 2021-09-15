import { useEffect } from "react";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { themeChange } from "theme-change";

export default function ChangeTheme() {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <button className="">
      <div className="dropdown dropdown-left">
        <div tabIndex="0" className="m-1 ">
          <span className="text-2xl hover:opacity-70">
            <HiOutlineColorSwatch />
          </span>
        </div>

        <ul
          tabIndex="0"
          className="p-2 shadow menu dropdown-content bg-base-100 rounded-box max-h-96 overflow-y-scroll"
        >
          <li data-set-theme="light" data-act-class="ACTIVECLASS">
            <a>light</a>
          </li>
          <li data-set-theme="dark" data-act-class="ACTIVECLASS">
            <a>dark</a>
          </li>
          <li data-set-theme="cupcake" data-act-class="ACTIVECLASS">
            <a>cupcake</a>
          </li>
          <li data-set-theme="bumblebee" data-act-class="ACTIVECLASS">
            <a>bumblebee</a>
          </li>
          <li data-set-theme="emerald" data-act-class="ACTIVECLASS">
            <a>emerald</a>
          </li>
          <li data-set-theme="corporate" data-act-class="ACTIVECLASS">
            <a>corporate</a>
          </li>
          <li data-set-theme="synthwave" data-act-class="ACTIVECLASS">
            <a>synthwave</a>
          </li>
          <li data-set-theme="retro" data-act-class="ACTIVECLASS">
            <a>retro</a>
          </li>
          <li data-set-theme="cyberpunk" data-act-class="ACTIVECLASS">
            <a>cyberpunk</a>
          </li>
          <li data-set-theme="valentine" data-act-class="ACTIVECLASS">
            <a>valentine</a>
          </li>
          <li data-set-theme="halloween" data-act-class="ACTIVECLASS">
            <a>halloween</a>
          </li>
          <li data-set-theme="garden" data-act-class="ACTIVECLASS">
            <a>garden</a>
          </li>
          <li data-set-theme="forest" data-act-class="ACTIVECLASS">
            <a>forest</a>
          </li>
          <li data-set-theme="aqua" data-act-class="ACTIVECLASS">
            <a>aqua</a>
          </li>
          <li data-set-theme="lofi" data-act-class="ACTIVECLASS">
            <a>lofi</a>
          </li>
          <li data-set-theme="pastel" data-act-class="ACTIVECLASS">
            <a>pastel</a>
          </li>
          <li data-set-theme="fantasy" data-act-class="ACTIVECLASS">
            <a>fantasy</a>
          </li>
          <li data-set-theme="wireframe" data-act-class="ACTIVECLASS">
            <a>wireframe</a>
          </li>
          <li data-set-theme="black" data-act-class="ACTIVECLASS">
            <a>black</a>
          </li>
          <li data-set-theme="luxury" data-act-class="ACTIVECLASS">
            <a>luxury</a>
          </li>
          <li data-set-theme="dracula" data-act-class="ACTIVECLASS">
            <a>dracula</a>
          </li>
        </ul>
      </div>
    </button>
  );
}
