import Filter from "../components/home/Filter";
import TopSlider from "../components/home/TopSlider";
import FlexMovie from "../components/tamplate/FlexMovie";

export default function Home({ topMoviesData, genresData }) {
  return (
    <div>
      {topMoviesData && <TopSlider topMovies={topMoviesData} />}
      <Filter />
      {genresData.map((e) => (
        <div key={e.item.id} className="my-4">
          <FlexMovie genresName={e.item.name} genresMovie={e.data.results} />
        </div>
      ))}
    </div>
  );
}

/* export async function getStaticProps() {
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
    // revalidate: 36000,
  };
} */
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

  const genre = await fetch(url + `genre/movie/list?`, {
    method: "GET",
    headers: {
      Authorization: token,
      "content-type": "application/json",
    },
    credentials: "same-origin",
  }).then((g) => g.json());

  const genresData = await Promise.all(
    genre.genres.map(async (item) => {
      const url = `https://api.themoviedb.org/3/discover/movie?with_genres=${item.id}`;
      const res = await fetch(url, {
        headers: {
          Authorization: token,
          "content-type": "application/json",
        },
        credentials: "same-origin",
      });
      const data = await res.json();
      return { item, data };
    })
  );
  if (!topMoviesData) {
    return {
      notFound: true,
    };
  }

  if (!genresData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { topMoviesData, genresData },
    revalidate: 36000,
  };
}
