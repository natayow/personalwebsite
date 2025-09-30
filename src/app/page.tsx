import Image from "next/image";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import ContactMe from "./components/contactMe";
import MyProjects from "./components/myProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <MyProjects />
      <Experience />
      <Testimonials />
      <ContactMe />
    </main>
  );
}
