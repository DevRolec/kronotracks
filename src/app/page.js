import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <h1 className="text-4xl font-bold text-dark p-4">KRONOTRACKS PROJECT</h1>
      <p className="text-lg mt-4">Welcome to KronoTracks</p>
    </div>
  )
}
