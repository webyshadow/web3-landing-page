
import FAQ from "./components/FAQ";
import Features from "./components/Feature";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rewards from "./components/Rewards";
import Waitlist from "./components/Waitlist";


export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <Header />
      <Hero />
      <Waitlist />
      <Features />
      <Rewards />
      <FAQ />
      <Footer />
    </main>
  );
}
