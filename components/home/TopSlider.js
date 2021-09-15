import TopSliderChildCart from "./TopSliderChildCart";
import TopSliderChildCartLg from "./TopSliderChildCartLg";
import TopSliderChildCartMd from "./TopSliderChildCartMd";
import TopSliderChildCartXl from "./TopSliderChildCartXl";

export default function TopSlider() {
  const images = [
    "img/(1).jpg",
    "img/(2).jpg",
    "img/(3).jpg",
    "img/(4).jpg",
    "img/(5).jpg",
    "img/(6).jpg",
    "img/(7).jpg",
    "img/(8).jpg",
  ];
  return (
    <div>
      <div className="md:hidden">
        <TopSliderChildCart images={images} />
      </div>
      <div className="hidden md:block lg:hidden">
        <TopSliderChildCartMd images={images} />
      </div>
      <div className="hidden lg:block xl:hidden">
        <TopSliderChildCartLg images={images} />
      </div>
      <div className="hidden xl:block">
        <TopSliderChildCartXl images={images} />
      </div>
    </div>
  );
}
