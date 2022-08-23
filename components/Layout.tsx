import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { WorkEducation } from "./WorkEducation";
import { Services } from "./Services";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <WorkEducation />
    </div>
  );
};
