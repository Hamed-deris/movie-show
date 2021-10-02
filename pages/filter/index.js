import { isEqual } from "lodash";
import dynamic from "next/dynamic";
import { memo } from "react";

const GridMovie = dynamic(() => import("../../components/tamplate/GridMovie"));
const Filter = dynamic(() => import("../../components/home/Filter"));
const Head = dynamic(() => import("next/head"));

function index({ filterData }) {
  return (
    <>
      <Head>
        <title>Movie Show Filter</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="movie movies film tv " />
        <meta
          name="description"
          content="show movies using TMDB Api update every 10 hovers"
        />
      </Head>
      <div>
        <Filter />
        <GridMovie filterMovieData={filterData} />
      </div>
    </>
  );
}
export default memo(index, isEqual);
export async function getServerSideProps(context) {
  const { page, country, genre, years, rating } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&year=${years}&with_genres=${genre}&watch_region=${country}&vote_average.gte=${rating}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWJmOGNkY2I3M2YxMmI1NzU4OTg4ODk3M2EwY2ZiNCIsInN1YiI6IjYxMjZhNjNmZDhlMjI1MDA0MjU0ZWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR0QfsEGCU_sAe8ETuB-vhtnL7VNb7h8SQYB0314ZU",
        "content-type": "application/json",
      },
    }
  );
  const filterData = await res.json();
  if (!filterData) {
    return {
      notFound: true,
    };
  }
  return {
    props: { filterData },
  };
}
