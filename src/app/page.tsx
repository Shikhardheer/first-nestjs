import { Main } from "next/document";
import Image from "next/image";
import HeroSection from "@/components/HeroSection"
import FeaturedCourses from "@/components/FeaturedCourses";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen g-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center text-white" >
      LEARN WITH SHIKHAR !
    </h1> */}
    <HeroSection />
    <FeaturedCourses>

    </FeaturedCourses>
    </main>

  );
}
