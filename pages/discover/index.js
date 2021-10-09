import dynamic from "next/dynamic";

const DiscoverMovie = dynamic(() =>
  import("../../components/template/DiscoverMovie")
);
const Pagination = dynamic(() =>
  import("../../components/template/Pagination")
);

function discover({ discoverMovies }) {
  return (
    <main>
      <DiscoverMovie title={"discover movies"} movies={discoverMovies} />
      <Pagination totalPage={discoverMovies.total_pages} />
    </main>
  );
}

export default discover;
export async function getServerSideProps(context) {
  const { page } = context.query;
  const url = "https://api.themoviedb.org/3/";
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWJmOGNkY2I3M2YxMmI1NzU4OTg4ODk3M2EwY2ZiNCIsInN1YiI6IjYxMjZhNjNmZDhlMjI1MDA0MjU0ZWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR0QfsEGCU_sAe8ETuB-vhtnL7VNb7h8SQYB0314ZU";

  const res = await fetch(url + `discover/movie?page=${page}`, {
    method: "GET",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },
    credentials: "same-origin",
  });
  const discoverMovies = await res.json();

  if (!discoverMovies) {
    return {
      notFound: true,
    };
  }

  return {
    props: { discoverMovies },
  };
}
