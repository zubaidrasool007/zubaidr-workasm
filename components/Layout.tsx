import { About } from "./About";
import { Contact } from "./Contact";
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
      <Contact />
    </div>
  );
};
