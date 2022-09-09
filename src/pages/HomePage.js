import FAQ from "../sections/faq-section";
import Header from "../sections/header";
import Introduction from "../sections/Intro-Section";
import MainNav from "../sections/mainNav";
import Policies from "../sections/policy-sec";
import TestimonySection from "../sections/testimonies";
import { WhyChooseT } from "../sections/why-choose-t";

export default function Home() {
  return (
    <>
      <Header />
      <MainNav />
      <Introduction />
      <Policies />
      <FAQ />
      <TestimonySection />
      <WhyChooseT />
    </>
  );
}
