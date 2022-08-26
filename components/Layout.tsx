import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";
import { Services } from "./Services";
import { Skills } from "./Skills";
import { Testimonials } from "./Testimonials";
import { Resume } from "./Resume";
import { GithubChart } from "./Github Chart";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Resume />
      <Skills />
      <Projects />
      <Testimonials />
      <GithubChart />
      <Contact />
      <Footer />
    </div>
  );
};
