import dynamic from "next/dynamic";

const Head = dynamic(() => import("next/head"));

const Search = dynamic(() => import("../../components/helper/Search"));
const DiscoverMovie = dynamic(() =>
  import("../../components/template/DiscoverMovie")
);
const Pagination = dynamic(() =>
  import("../../components/template/Pagination")
);

function SearchPage({ searchedMovie }) {
  if (!searchedMovie.results || searchedMovie.results.length < 1)
    return (
      <>
        <Head>
          <title>Movie Show Search</title>
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="Search" content="movie movies film tv Search " />
          <meta
            name="description"
            content="show movies using TMDB Api update every 10 hovers"
          />
        </Head>
        <div className="flex justify-center items-center m-auto mb-4">
          <div className="mt-12">
            <h3 className="text-4xl font-bold mb-3">Nothing found</h3>
            <p className="w-[260px] opacity-80">
              Please check the word you searched and try again
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center m-auto mt-2 lg:hidden">
          <Search />
        </div>
      </>
    );
  return (
    <>
      <Head>
        <title>Movie Show Search</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Search" content="movie movies film tv Search " />
        <meta
          name="description"
          content="show movies using TMDB Api update every 10 hovers"
        />
      </Head>
      <main>
        <DiscoverMovie title={"find movies"} movies={searchedMovie} />
        <Pagination totalPage={searchedMovie.total_pages} />
      </main>
    </>
  );
}

export default SearchPage;
export async function getServerSideProps(context) {
  const { searchQuery } = context.query;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNWJmOGNkY2I3M2YxMmI1NzU4OTg4ODk3M2EwY2ZiNCIsInN1YiI6IjYxMjZhNjNmZDhlMjI1MDA0MjU0ZWY2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZR0QfsEGCU_sAe8ETuB-vhtnL7VNb7h8SQYB0314ZU",
        "content-type": "application/json",
      },
    }
  );
  const searchedMovie = await res.json();
  if (!searchedMovie) {
    return {
      notFound: true,
    };
  }
  return {
    props: { searchedMovie },
  };
}
