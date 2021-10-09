import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
const MdSearch = dynamic(() =>
  import("react-icons/md").then((m) => m.MdSearch)
);

export default function Filter({}) {
  // ===   ===   ===   ===   ===   ===   ===   ===   const
  const [countryId, setCountryId] = useState("");
  const [genreId, setGenreId] = useState("");
  const [country, setCountry] = useState("country");
  const [genre, setGenre] = useState("genre");
  const [pages, setPages] = useState(1);
  const [years, setYears] = useState("years");
  const [rate, setRate] = useState("rate");
  const router = useRouter();
  const allCounty = [
    { iso_3166_1: "AU", english_name: "Australia" },
    {
      iso_3166_1: "US",
      english_name: "America",
    },
    { iso_3166_1: "JP", english_name: "Japan" },
    { iso_3166_1: "CN", english_name: "China" },
    { iso_3166_1: "FR", english_name: "France" },
    {
      iso_3166_1: "KR",
      english_name: "South Korea",
    },
    {
      iso_3166_1: "HK",
      english_name: "Hong Kong",
    },
    { iso_3166_1: "CA", english_name: "Canada" },
    { iso_3166_1: "IT", english_name: "Italy" },
    { iso_3166_1: "DE", english_name: "Germany" },
    { iso_3166_1: "ES", english_name: "Spain" },
    { iso_3166_1: "IN", english_name: "India" },
    { iso_3166_1: "TR", english_name: "Turkey" },
  ];
  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  // ===   ===   ===   ===   ===   ===   ===   ===   function

  const handleFilter = useCallback(() => {
    router.push({
      pathname: "/filter",
      query: {
        country: countryId,
        genre: genreId,
        years: years === "years" ? "" : years,
        rating: rate === "rate" ? "" : rate,
        page: pages,
      },
    });
  }, [countryId, genreId, years, rate, pages]);

  const handleCountry = useCallback((c_english_name, c_iso_3166_1) => {
    setCountry(c_english_name);
    setCountryId(c_iso_3166_1);
  }, []);
  const handleGenre = useCallback((gId, gName) => {
    setGenreId(gId);
    setGenre(gName);
  }, []);

  // ====     ====     ====     ====     ====     Effects
  useEffect(() => {
    router?.query?.country &&
      setCountry(
        allCounty.filter((e) => e.iso_3166_1 === router.query.country)[0]
          .english_name
      );
    router?.query?.genre &&
      setGenre(genres.filter((g) => `${g.id}` === router.query.genre)[0].name);
    router?.query?.years && setYears(router.query.years);
    router?.query?.page && setRate(router.query.rating);
  }, [router.query.page]);
  return (
    <div className="flex justify-center bg-base-300">
      <div className="container mx-auto py-4 px-2 flex flex-wrap items-center justify-center gap-2">
        <div className="dropdown ">
          <div tabIndex="0" className="btn btn-sm md:btn-md">
            {country}
          </div>
          <ul
            tabIndex="0"
            className="p-2 shadow max-h-44 w-44 overflow-y-auto menu dropdown-content bg-base-100 rounded-box"
          >
            {allCounty.map((c) => (
              <li
                className="text-sm btn btn-sm h-full btn-ghost text-left"
                key={c.iso_3166_1}
                onClick={() => handleCountry(c.english_name, c.iso_3166_1)}
              >
                {c.english_name}
              </li>
            ))}
          </ul>
        </div>

        {/* ==   ==   ==   ==   ==   ==   ==   ==   genre   */}
        <div className="dropdown">
          <div tabIndex="0" className="btn btn-sm md:btn-md">
            {genre}
          </div>
          <ul
            tabIndex="0"
            className="p-2 shadow max-h-44 w-44 overflow-y-auto menu dropdown-content bg-base-100 rounded-box"
          >
            {genres.map((g) => (
              <li
                key={g.id}
                className="btn btn-sm h-full  btn-ghost text-left"
                onClick={() => handleGenre(g.id, g.name)}
              >
                {g.name}
              </li>
            ))}
          </ul>
        </div>
        {/* ==   ==   ==   ==   ==   ==   ==   ==   years   */}

        <label className="btn no-animation btn-sm md:btn-md" htmlFor="year">
          <input
            className="w-20 md:w-auto"
            type="range"
            onChange={(e) => setYears(e.target.value)}
            id="year"
            name="year"
            value={isNaN(years) ? 1 : years}
            min="2000"
            max="2021"
          />
          <span className="ml-2 text-base">{years}</span>
        </label>

        {/* ==   ==   ==   ==   ==   ==   ==   ==   rate   */}

        <label className="btn no-animation btn-sm md:btn-md" htmlFor="rating">
          <input
            className="w-20 md:w-auto"
            type="range"
            onChange={(e) => setRate(e.target.value)}
            id="rating"
            name="rating"
            value={isNaN(rate) ? 1 : rate}
            min="1"
            max="10"
            step="0.1"
          />
          <span className="ml-2 text-base">{rate}</span>
        </label>

        <button
          name="filter"
          onClick={handleFilter}
          className="btn tracking-widest flex items-center btn-sm md:btn-md"
        >
          <MdSearch className="text-lg mr-1 " />
          <span>filter</span>
        </button>
      </div>
    </div>
  );
}
