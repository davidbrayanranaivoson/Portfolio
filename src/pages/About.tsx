import { Download } from "lucide-react";

function About() {
  return (
    <div className="flex gap-6 h-lvh bg-blue-50 text-black pt-8 px-14">
      <aside className="flex-1">
        <div className="flex items-center justify-start gap-2">
          <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
          <h1 id="About" className="text-indigo-500 font-medium">
            About
          </h1>
        </div>
        <div className="flex gap-6">
          <aside className="flex flex-col w-1/2 gap-6 pr-4 justify-start">
            <h1 className="font-semibold text-2xl pt-2">Qui suis-je ?</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              exercitationem beatae nostrum inventore, minus, non fugit aut
              sint, id nemo aliquid quae ducimus harum dolore quam cum ipsa
              optio officiis?
            </p>{" "}
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              exercitationem beatae nostrum inventore, minus, non fugit aut
              sint.
            </p>
            <div className="btn bg-white shadow-md border-0">
              <div className="flex items-center justify-center gap-2 font-medium text-indigo-500">
                <Download className="w-4" />
                <input
                  type="button"
                  className=""
                  value={"Téléchaeger mon CV"}
                />
              </div>
            </div>
          </aside>
          <div className="w-1/2 shrink-0">
            <img src="/public/top.png" alt="" className="w-1/1" />
          </div>
        </div>
      </aside>
      <aside className="flex-1">
        <div className="flex items-center justify-start gap-2">
          <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
          <h1 id="About" className="text-indigo-500 font-medium">
            Mes compétences
          </h1>
        </div>
        <h1 className="font-semibold text-2xl">Technologies que j'utilise</h1>
        <div className="flex flex-2 flex-row justify-between gap-8">
          <div className="flex gap-3 w-1/2">
            <img src="/public/react-logo@3x.png" alt="" className="w-10" />
            <div className="flex flex-col gap-3 grow">
              <div className="font-semibold flex justify-between">
                <h2>React / Nextjs</h2>
                <span>80%</span>
              </div>
              <div className="bg-gray-300 w-1/1 h-1.5 rounded-2xl">
                <div className="bg-linear-to-l from-blue-800 to-blue-400 w-8/10 h-1.5 rounded-2xl"></div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 w-1/2">
            <img src="/public/mongodb.png" alt="" className="w-10" />
            <div className="flex flex-col gap-3 grow">
              <div className="font-semibold flex justify-between">
                <h2>Mysql / MongoDB</h2>
                <span>90%</span>
              </div>
              <div className="bg-gray-300 w-1/1 h-1.5 rounded-2xl">
                <div className="bg-linear-to-l from-blue-800 to-blue-400 w-9/10 h-1.5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
export default About;
