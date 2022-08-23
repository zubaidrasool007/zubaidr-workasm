import { About } from "./About";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { WorkEducation } from "./WorkEducation";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />

      <WorkEducation />
    </div>
  );
};
