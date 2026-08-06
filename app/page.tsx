import { About } from "@/components/sections/about";
import { BuildLog } from "@/components/sections/build-log";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Workflow } from "@/components/sections/workflow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Workflow />
      <Projects />
      <BuildLog />
      <Contact />
    </>
  );
}
