import HeroSlider from "@/components/HeroSlider";
import Footer from "@/components/layouts/site/Footer";
import Header from "@/components/layouts/site/Header/Header";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      <HeroSlider />

      <Footer />
    </>
  );
}
