import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Services } from "./Services";
import { Testimonials } from "./Testimonials";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
    </div>
  );
};
