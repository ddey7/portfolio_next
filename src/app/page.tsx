import About from "./components/About";
import Educations from "./components/Educations";
import Experience from "./components/Experience";
import Interests from "./components/Interests";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex">
      <div className="md:w-1/6 shadow-lg flex justify-center m-4 rounded-lg">
        <Sidebar />
      </div>
      <div className="md:w-5/6">
        <About />
        <Experience />
        <Educations />
        <Skills />
        <Interests />
      </div>
    </div>
  );
}
