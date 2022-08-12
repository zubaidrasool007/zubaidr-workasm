import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
};
