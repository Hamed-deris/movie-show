import TopSlider from "../components/home/TopSlider";
import ScreenSize from "../components/hooks/ScreenSize";

export default function Home({ topMoviesData }) {
  return (
    <div>
      <TopSlider topMovies={topMoviesData} />
      {/* <PosterSlider /> */}
      <ScreenSize />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://api.themoviedb.org/3/trending/movie/week?", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWJmOGNkY2I3M2YxMmI1NzU4OTg4ODk3M2EwY2ZiNCIsInN1YiI6IjYxMjZhNjNmZDhlMjI1MDA0MjU0ZWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR0QfsEGCU_sAe8ETuB-vhtnL7VNb7h8SQYB0314ZU",
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
  };
}
/* export const getStaticProps = async (ctx) => {
  try {
      const {slug} = ctx.params
      const url = Array.isArray(slug) ? slug.join("/") : slug
      const token = await getToken()
      const result = await getData(url, token)

      if (result.errors) {
          throw result.errors
      }

      if (!result.data) {
          throw {message: "No data"}
      }

      return ({props: result.data})

  } catch (error) {
      error.ctx = ctx
      logErrorToExternalLoggingService(error, "Fetching initial props failed")
      return ({props: {}})
  }
} */
/* } catch (error) {
  error.ctx = ctx
  logErrorToExternalLoggingService(error, "Fetching static props failed")
  throw error
}
 */
