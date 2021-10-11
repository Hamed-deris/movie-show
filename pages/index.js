import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import { memo } from "react";
const Head = dynamic(() => import("next/head"));

const ResponsiveCards = dynamic(() =>
  import("../components/template/DiscoverTrendingMovie")
);

const Filter = dynamic(() => import("../components/template/Filter"));
const TopSlider = dynamic(() => import("../components/home/TopSlider"));

function Home({ topMoviesData }) {
  return (
    <>
      <Head>
        <title>Movie Show</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Movie Show" content="movie movies film tv " />
        <meta
          name="description"
          content="show movies using TMDB Api update every 10 hovers"
        />
      </Head>
      <div>
        <div className="bg-gradient-to-r from-black via-gray-500 to-black ">
          {topMoviesData && <TopSlider topMovies={topMoviesData} />}
        </div>
        <Filter />
        <main>
          <ResponsiveCards
            title={"weekly movie trending"}
            movies={topMoviesData}
          />
        </main>
      </div>
    </>
  );
}
export default memo(Home, isEqual);

export async function getStaticProps() {
  const url = "https://api.themoviedb.org/3/";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWJmOGNkY2I3M2YxMmI1NzU4OTg4ODk3M2EwY2ZiNCIsInN1YiI6IjYxMjZhNjNmZDhlMjI1MDA0MjU0ZWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR0QfsEGCU_sAe8ETuB-vhtnL7VNb7h8SQYB0314ZU";

  const res = await fetch(url + "trending/movie/week?", {
    method: "GET",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },
    credentials: "same-origin",
  });
  const topMoviesData = await res.json();

  if (!topMoviesData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { topMoviesData },
    revalidate: 36000,
  };
}
