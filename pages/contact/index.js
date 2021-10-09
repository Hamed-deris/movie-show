function contact() {
  return (
    <section className="flex flex-col justify-center items-center my-auto">
      <div>
        <h2 className="text-3xl font-bold py-3">Welcome Contact Us</h2>
        <p className="opacity-80 text-center">Please Help us to be better</p>
      </div>
      <div class="container px-4 mx-auto my-4 flex flex-col">
        <div className="grid lg:grid-cols-2 gap-6 my-3">
          <div className="relative">
            <input
              type="text"
              placeholder="username"
              class="input input-bordered w-full peer placeholder-transparent"
            />
            <label class="label absolute -top-6 left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all bg-base-100 px-2 overflow-hidden peer-focus:-top-6">
              <span class="label-text">Username</span>
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="user_name@email.com"
              class="input input-bordered w-full  peer placeholder-transparent"
            />
            <label class="label absolute -top-6 left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all bg-base-100 px-2 overflow-hidden peer-focus:-top-6">
              <span class="label-text ">Email</span>
            </label>
          </div>
        </div>
        <div className="relative mt-3">
          <textarea
            class="textarea h-24 w-full textarea-bordered peer placeholder-transparent"
            placeholder="Massage"
          ></textarea>
          <label class="label absolute -top-6 left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:left-3 transition-all bg-base-100 px-2 overflow-hidden peer-focus:-top-6">
            <span class="label-text">Massage</span>
          </label>
        </div>
        <button className="btn btn-wide my-6 mx-auto">Send</button>
      </div>
    </section>
  );
}

export default contact;
