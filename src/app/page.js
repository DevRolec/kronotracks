import Navbar from "../components/Navbar";
import FeaturesPage from "../components/Features";
import HighlightsPage from "../components/Highlights";
import HeadphonesPromo from "../components/Howitworks";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Form from "../components/Form";


export default function Home() {
  return (
    <div className=" flex items-center justify-center flex-col h-auto">
      <Navbar />
      <Hero />
      <FeaturesPage />
      <HeadphonesPromo />
      <HighlightsPage />
      <Form />
      <Footer />
    </div>
  );
}
