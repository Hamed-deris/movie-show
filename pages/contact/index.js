import dynamic from "next/dynamic";

const Head = dynamic(() => import("next/head"));

function contact() {
  return (
    <>
      <Head>
        <title>H.D Movie Show Contact Us</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />$
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="Contact" content="Contact Us " />
        <meta
          name="description"
          content="show movies using TMDB Api update every 10 hovers"
        />
      </Head>
      <section className="flex flex-col justify-center items-center my-auto">
        <div>
          <h2 className="text-3xl font-bold py-3">Welcome Contact Us</h2>
          <p className="opacity-80 text-center">Please Help us to be better</p>
        </div>
        <div className="container px-4 mx-auto my-4 flex flex-col">
          <div className="grid lg:grid-cols-2 gap-6 my-3">
            <div className="relative">
              <input
                type="text"
                placeholder="username"
                className="input input-bordered w-full peer placeholder-transparent"
              />
              <label className="label absolute -top-6 left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all bg-base-100 px-2 overflow-hidden peer-focus:-top-6">
                <span className="label-text">Username</span>
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="user_name@email.com"
                className="input input-bordered w-full  peer placeholder-transparent"
              />
              <label className="label absolute -top-6 left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all bg-base-100 px-2 overflow-hidden peer-focus:-top-6">
                <span className="label-text ">Email</span>
              </label>
            </div>
          </div>
          <div className="relative mt-3">
            <textarea
              className="textarea h-24 w-full textarea-bordered peer placeholder-transparent"
              placeholder="Massage"
            ></textarea>
            <label className="label absolute -top-6 left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all bg-base-100 px-2 overflow-hidden peer-focus:-top-6">
              <span className="label-text">Massage</span>
            </label>
          </div>
          <button className="btn btn-wide my-6 mx-auto">Send</button>
        </div>
      </section>
    </>
  );
}

export default contact;
