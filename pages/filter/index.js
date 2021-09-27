import Filter from "../../components/home/Filter";
import FlexMovie from "../../components/tamplate/FlexMovie";
import GridMovie from "../../components/tamplate/GridMovie";

export default function index({ filterData }) {
  // ====     ====     ====     ====     ====     Effects

  return (
    <div>
      <Filter />
      <GridMovie />
    </div>
  );
}
/* export async function getServerSideProps(context) {
  const { page, country, genre, years } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?page=${page}&year=${years}&with_genres=${genre}&watch_region=${country}`,
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
 */
