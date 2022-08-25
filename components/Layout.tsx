import { About } from "./About";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Services } from "./Services";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer />
    </div>
  );
};
