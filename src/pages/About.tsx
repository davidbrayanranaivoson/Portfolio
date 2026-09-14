import { Download } from "lucide-react";
import { techItems } from "../data/techItems";
import type { techCardsTypeProps } from "../types/techCardsTypeProps";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const SckillsVariants = {
  initial: { opacity: 0, x: 50 },
  animate: {},
};
const buttonVariants = {
  initial: { opacity: 0, y: -30 },
  animate: {},
};
const imgVariants = {
  initial: { opacity: 0 },
  animate: {},
};

function About() {
  const [visibilityE, setvisibilityE] = useState(false);
  const myFunction = () => {
    console.log("L'élément est maintenant visible");
  };

  // Utilisez useEffect pour surveiller la visibilité de l'élément
  useEffect(() => {
    const targetElement = document.getElementById("AboutId");

    if (targetElement) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibilityE) {
              myFunction();
              SckillsVariants.animate = { opacity: 1, x: 0 };
              buttonVariants.animate = { opacity: 1, y: 0 };
              imgVariants.animate = { opacity: 1 };
              setvisibilityE(true);
              // Arrêtez l'observation si vous voulez que la fonction ne soit appelée qu'une seule fois
              observer.unobserve(targetElement);
            }
          });
        },
        { root: null, threshold: 0.5 },
      );

      observer.observe(targetElement); //Pour déclarer les element à observer
    }
  }, []);

  return (
    <div className="flex h-screen bg-blue-50 text-black pt-9 px-14 " id="About">
      <div className="flex gap-16">
        <aside className="flex-1">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            <h1 className="text-indigo-500 font-medium">About</h1>
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
              <p id="AboutId">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
                exercitationem beatae nostrum inventore, minus, non fugit aut
                sint.
              </p>
              <motion.div
                className="btn bg-white shadow-md border-0 flex w-2/3 p-2"
                variants={buttonVariants}
                initial={"initial"}
                animate={visibilityE ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center justify-center gap-2 font-medium text-indigo-500">
                  <Download className="w-4" />
                  <input
                    type="button"
                    className=""
                    value={"Téléchaeger mon CV"}
                  />
                </div>
              </motion.div>
            </aside>
            {
              <motion.div
                className="w-1/2 shrink-0"
                variants={buttonVariants}
                initial={"initial"}
                animate={visibilityE ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <img src="/public/top.png" alt="" className="w-1/1" />
              </motion.div>
            }
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
          {
            <motion.div
              className="flex flex-row justify-between gap-4 flex-wrap"
              variants={SckillsVariants}
              initial={"initial"}
              animate={visibilityE ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {techItems.map((logo) => (
                <CardTechnologie logo={logo} key={logo.id} />
              ))}
            </motion.div>
          }
          <motion.div
            className="mt-8 text-center"
            variants={buttonVariants}
            initial={"initial"}
            animate={visibilityE ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <input
              type="button"
              className="btn btn-wide bg-purple-200 text-purple-600"
              value={"Voir toutes mes compétences"}
            />
          </motion.div>
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
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${logo.niveau}` }}
            transition={{ duration: 0.5, delay: 1 }}
            className={`bg-linear-to-l from-blue-800 to-blue-400 ${logo.nvClasse} h-1.5 rounded-2xl`}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
