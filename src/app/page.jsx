import LogoSection from "./components/LogoSection";
import BannerCarousel from "./components/BannerCarousel";
import ExamesTable from "./components/ExamesTable";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <LogoSection />
      <BannerCarousel />
      <ExamesTable />
      <Footer />
    </div>
  );
}
