<<<<<<< HEAD
<<<<<<< HEAD
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-dark p-4">KRONOTRACKS PROJECT</h1>
      <p className="text-lg mt-4">Welcome to KronoTracks</p>
    </>
  )
=======
import FeaturesPage from "../components/Features";
import HighlightsPage from "../components/Highlights";
import HeadphonesPromo from "../components/Howitworks";

export default function Home() {
  return (
    <div className=" flex items-center justify-center flex-col h-auto gap-5 pt-5 pb-5">
      <FeaturesPage />
      <HeadphonesPromo />
      <HighlightsPage />
    </div>
  );
>>>>>>> origin/Destinys-Kronotrack
=======
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <h1 className="text-4xl font-bold text-dark p-4">KRONOTRACKS PROJECT</h1>
      <p className="text-lg mt-4">Welcome to KronoTracks</p>

      <Form />

      <Footer />
    </div>
  );
>>>>>>> origin/wizfooter
}
