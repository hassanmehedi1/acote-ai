import { About } from "@/components/component/about";
import { ContactUs } from "@/components/component/contact-us";
import CoreTeam from "@/components/component/core-team";
import CoreServices from "@/components/component/coreServices";
import FutureProjects from "@/components/component/future-projects";
import { Hero } from "@/components/component/hero";
import OurProjects from "@/components/component/our-projects";
import OurTeam from "@/components/component/our-team";
import OurExpertise from "@/components/component/ourExpertise";
import OurSolutions from "@/components/component/ourSolutions";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <OurExpertise />
      <OurSolutions />
      <CoreServices />
      <OurProjects />
      <FutureProjects />
      <OurTeam />
      <CoreTeam />
      <ContactUs />
    </main>
  );
}
