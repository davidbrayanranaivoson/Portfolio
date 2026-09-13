import { Download } from "lucide-react";
import { techItems } from "../data/techItems";
import type { techCardsTypeProps } from "../types/techCardsTypeProps";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex h-lvh bg-blue-50 text-black pt-9 px-14">
      <div className="flex gap-16">
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
              <div className="btn bg-white shadow-md border-0 flex w-2/3 p-2">
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
          <h1 className="font-semibold text-2xl pt-2 pb-6">
            Technologies que j'utilise
          </h1>
          <motion.div
            className="flex flex-row justify-between gap-4 flex-wrap"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            {techItems.map((logo) => (
              <CardTechnologie logo={logo} key={logo.id} />
            ))}
          </motion.div>
          <div className="mt-8 text-center">
            <input
              type="button"
              className="btn btn-wide bg-purple-200 text-purple-600"
              value={"Voir toutes mes compétences"}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
export function CardTechnologie({
  logo,
  ...props
}: Readonly<{ logo: techCardsTypeProps }>) {
  return (
    <div className="flex items-center justify-center gap-3 w-5/11" {...props}>
      <img src={`/public/${logo.link}`} alt="" className="w-8" />
      <div className="flex flex-col gap-3 grow">
        <div className="font-semibold flex justify-between">
          <h2>{logo.nom}</h2>
          <span>{logo.niveau}</span>
        </div>
        <div className="bg-gray-300 w-1/1 h-1.5 rounded-2xl">
          <div
            className={`bg-linear-to-l from-blue-800 to-blue-400 ${logo.nvClasse} h-1.5 rounded-2xl`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default About;
