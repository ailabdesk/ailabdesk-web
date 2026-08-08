import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTools from "@/components/featured/FeaturedTools";
import Footer from "@/components/layout/Footer";
import Categories from "@/components/home/Categories";
import TrendingSection from "@/components/home/TrendingSection";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrendingSection />
      <Categories />
       <FeaturedTools />
      <Footer />
    </main>
  );
}