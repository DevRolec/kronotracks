const Hero = () => {
  return (
    <section className="px-4 py-10 md:px-10 flex flex-col md:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Discover the World&apos;s <span className="text-indigo-600">Hidden</span> Wonders
        </h1>
        <p className="text-gray-600 mb-6 max-w-md">
          Find the culture, nature and hidden gems that give unforgettable experiences. From rare attractions to remarkable destinations, we help you uncover the world’s lesser-known places and stories.
        </p>
        <button className="bg-gray-900 text-white px-6 py-2 rounded-full">Reserve Trip</button>
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
