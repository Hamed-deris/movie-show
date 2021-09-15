import TopSliderChildCart from "./TopSliderChildCart";
import TopSliderChildCartMd from "./TopSliderChildCartMd";

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
      <div className="sm:hidden">
        <TopSliderChildCart images={images} />
      </div>
      <div className="hidden sm:block">
        <TopSliderChildCartMd images={images} />
      </div>
    </div>
  );
}
