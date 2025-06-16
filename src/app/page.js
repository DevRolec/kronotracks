import FeaturesPage from "../components/Features";
import HighlightsPage from "../components/Highlights";
import HeadphonesPromo from "../components/Howitworks";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className=" flex items-center justify-center flex-col h-auto gap-5 pt-5 pb-5">
      <Navbar />
      <Hero />

      <FeaturesPage />
      <HeadphonesPromo />
      <HighlightsPage />
    </div>
  );
}

{
  /* import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <h1 className="text-4xl font-bold text-dark p-4">KRONOTRACKS PROJECT</h1>
      <p className="text-lg mt-4">Welcome to KronoTracks</p>
>>>>>>> dea05b8f6acf1f354452077190639f38a57d768d
    </div>
  );
} */
}
