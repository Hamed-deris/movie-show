import dynamic from "next/dynamic";

const MovieCard = dynamic(() => import("./MovieCard"));

function DiscoverMovie({ title, movies }) {
  return (
    <section className="bg-base-200/50 ">
      <h2
        className="capitalize  text-2xl font-bold shadow border-b-2 border-base-300/20 text-center py-5
      bg-base-200 "
      >
        {title}
      </h2>
      <ul className="flex flex-wrap  justify-center gap-6 px-4 pt-6 pb-8">
        {movies &&
          movies.results.map((m) => (
            <li
              className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33%-1rem)] xl:w-[calc(25%-1.25rem)] 2xl:w-96"
              key={m.id}
            >
              <MovieCard movie={m} />
            </li>
          ))}
      </ul>
    </section>
  );
}

export default DiscoverMovie;
