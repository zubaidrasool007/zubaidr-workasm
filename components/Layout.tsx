import { About } from "./About";
import { Footer } from "./Footer";
import { Contact } from "./Contact";
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
      <Footer />
      <Contact />
      <Testimonials />
      <Skills />
      <WorkEducation />
    </div>
  );
};
