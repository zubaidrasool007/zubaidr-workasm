import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Projects } from "./Projects";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
};
