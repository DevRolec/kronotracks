const Hero = () => {
  return (
    <section className="px-4 w-[93%] py-10 mt-4 mb-4 bg-[var(--light)] md:px-10 flex flex-col md:flex-row items-center gap-5">
      {/* Left Section */}
      <div className="flex-1 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--dark)]">
          Discover the World&apos;s{" "}
          <span className="text-[var(--purplelt)]">Hidden</span> Wonders
        </h1>
        <p className="text-[0.875rem] font-sans text-justify mb-4 text-[var(--dark)] font-semibold max-w-[90%]">
          Find the culture, nature and hidden gems that give unforgettable
          experiences. From rare attractions to remarkable destinations, we help
          you uncover the world’s lesser-known places and stories.
        </p>
        <button className="bg-purple text-light h-auto px-6 py-2 rounded">
          Reserve Trip
        </button>
        <a href="/admin">
          <button className="bg-purple text-light m-3 h-auto px-6 py-2 rounded">
            Admin
          </button>
        </a>
      </div>

      {/* Right Image Cards */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="col-span-2 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image</span>
        </div>
        <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image</span>
        </div>
        <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
