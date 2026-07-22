import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTools from "@/components/featured/FeaturedTools";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedTools />
      <Footer />
    </main>
  );
}