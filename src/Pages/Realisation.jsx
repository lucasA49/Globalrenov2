import RealizationsSection from "../Composant/RealizationsSection";
import Header from "../Composant/Header";
import Footer from "../Composant/Footer";
import ImpactSection from "../Composant/ImpactSection";
import RealizationsBannerDesktop from "../Composant/RealizationsBannerDesktop";
export default function Realisation () {
  return (
    <>
      <Header />
      <RealizationsBannerDesktop/>
        <RealizationsSection/>
        <ImpactSection/>
        <Footer />
    </>
  );
}
