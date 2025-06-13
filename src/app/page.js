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
}
