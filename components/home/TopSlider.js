import TopSliderChildCart from "./TopSliderChildCart";
import TopSliderChildCartLg from "./TopSliderChildCartLg";
import TopSliderChildCartMd from "./TopSliderChildCartMd";
import TopSliderChildCartXl from "./TopSliderChildCartXl";

export default function TopSlider({ topMovies }) {
  return topMovies ? (
    <div className="">
      <div className="md:hidden">
        <TopSliderChildCart movie={topMovies && topMovies.results} />
      </div>
      <div className="hidden md:block lg:hidden">
        <TopSliderChildCartMd movie={topMovies && topMovies.results} />
      </div>
      <div className="hidden lg:block xl:hidden">
        <TopSliderChildCartLg movie={topMovies && topMovies.results} />
      </div>
      <div className="hidden xl:block">
        <TopSliderChildCartXl movie={topMovies && topMovies.results} />
      </div>
    </div>
  ) : (
    <div></div>
  );
}
