import DiscoverMovie from "../../components/template/DiscoverMovie";
import Pagination from "../../components/template/Pagination";

function Search({ searchedMovie }) {
  return (
    <main>
      <DiscoverMovie title={"find movies"} movies={searchedMovie} />
      <Pagination totalPage={searchedMovie.total_pages} />
    </main>
  );
}

export default Search;
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import { IoMdStar } from "react-icons/io";
// const Head = dynamic(() => import("next/head"));

// export default function searchedMovie({ searchedMovie }) {
//   const handleDataToStr = (dataToStr) => {
//     let g = "";
//     dataToStr.map((m) => (g += m.name + ", "));
//     return g.slice(0, g.length - 2);
//   };

//   return (
//     <>
//       <Head>
//         <title>Movie Show info</title>
//         <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
//         <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <meta name="keywords" content="movie movies film tv " />
//         <meta
//           name="description"
//           content="show movies using TMDB Api update every 10 hovers"
//         />
//       </Head>
//       <div className=" container p-4 mx-auto md:grid md:grid-cols-3">
//         <div className="relative h-96 w-full col-span-1 md:h-full md:!p-10 ">
//           <Image
//             className="object-contain relative object-top md:!pt-10 xl:!p-10"
//             src={"/t/p/w500/" + searchedMovie.poster_path}
//             layout="fill"
//             alt={searchedMovie.title}
//           />
//         </div>
//         {/* ====    ====    ====    ====    ====     body cord  */}

//         <div className="card-body col-span-2">
//           <h2 className="card-title my-3 lg:text-3xl">{searchedMovie.title}</h2>

//           <div>
//             <div className="space-y-2 opacity-80">
//               <p>
//                 <span className="font-semibold">Release Date : </span>
//                 {searchedMovie.release_date}
//               </p>
//               <p className="flex">
//                 <span className="font-semibold">Name : </span>
//                 <span className="mr-1">{searchedMovie.vote_average} / 10</span>
//                 <IoMdStar className="text-warning  text-xl" />
//               </p>
//               <p>
//                 <span className="font-semibold">Name : </span>
//                 {searchedMovie.original_title}
//               </p>
//               <p>
//                 <span className="font-semibold">language : </span>
//                 {handleDataToStr(searchedMovie.spoken_languages)}
//               </p>
//               <p>
//                 <span className="font-semibold">genres : </span>
//                 {handleDataToStr(searchedMovie.genres)}
//               </p>
//               <p>
//                 <span className="font-semibold">popularity : </span>
//                 {searchedMovie.popularity}
//               </p>
//               <p>
//                 <span className="font-semibold">status : </span>
//                 {searchedMovie.status}
//               </p>
//               <p>
//                 <span className="font-semibold">budget : </span>
//                 {searchedMovie.budget} $
//               </p>
//               <p>
//                 <span className="font-semibold">Production Companies : </span>
//                 {handleDataToStr(searchedMovie.production_companies)}
//               </p>
//             </div>
//             {/* ====    ====    ====    ====    ====     download link  */}
//             <div
//               onClick={() => setMoreInfo(!moreInfo)}
//               className="card-title my-4 flex justify-between items-center cursor-pointer "
//             >
//               <span>overview</span>
//             </div>
//             <p className="">{searchedMovie.overview}</p>
//           </div>
//           <div className="my-6 text-center">
//             <h3 className="card-title"> Download Links</h3>
//             <div className="text-info">
//               <button className="btn btn-ghost btn-sm ">Download Link 1</button>
//               <button className="btn btn-ghost btn-sm ">Download Link 2</button>
//               <button className="btn btn-ghost btn-sm ">Download Link 3</button>
//               <button className="btn btn-ghost btn-sm ">Download Link 4</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
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
  //   if (!searchedMovie) {
  //     return {
  //       notFound: true,
  //     };
  //   }
  return {
    props: { searchedMovie },
  };
}
