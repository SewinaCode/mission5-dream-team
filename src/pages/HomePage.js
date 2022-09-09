import FAQ from "../sections/Faq-section";
import Header from "../sections/Header";
import Introduction from "../sections/Intro-Section";
import MainNav from "../sections/MainNav";
import Policies from "../sections/Policy-sec";
import TestimonySection from "../sections/Testimonies";

export default function Home() {
  return (
    <>
      <Header />
      <MainNav />
      <Introduction />
      <Policies />
      <FAQ />
      <TestimonySection />
    </>
  );
}
