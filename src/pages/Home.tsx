import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Service from "./Service";

export default function Home() {
  return (
    <div className="flex flex-col relative">
      <Header />
      <div
        className="flex flex-col bg-blue-50 pt-9 gap-7 lg:h-screen px-14 mb-30"
        id="About"
      >
        <div className="lg:h-2/3">
          <About />
        </div>
        <div className="lg:h-1/3">
          <Service />
        </div>
      </div>
      <div className="lg:h-64 bg-blue-50 text-base-200 px-14 ">
        <Contact />
      </div>
    </div>
  );
}
