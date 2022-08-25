import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { WorkEducation } from "./WorkEducation";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";
import { Skills } from "./Skills";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Skills />
      <WorkEducation />
    </div>
  );
};
