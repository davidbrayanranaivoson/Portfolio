import { useEffect, useState } from "react";
import { ServicesListe } from "../data/ServicesListe";
import type { ServiceType } from "../types/ServiceType";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { opacity: 0, y: -30 },
  animate: {},
};

function Service() {
  const [visibilityE, setvisibilityE] = useState(false);
  // const myFunction = () => {
  //   console.log("L'élément est maintenant visible");
  // };

  // Utilisez useEffect pour surveiller la visibilité de l'élément
  useEffect(() => {
    const targetElement = document.getElementById("Services");

    if (targetElement) {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !visibilityE) {
              // myFunction();
              buttonVariants.animate = { opacity: 1, y: 0 };
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
    <div
      className="flex text-blackpx-14 pt-2 pb-7 border-t border-t-blue-100"
      id="About"
    >
      <div className="flex gap-16 ">
        <aside className="flex-1">
          <div className="flex items-center justify-start gap-2">
            <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
            <h1 className="text-indigo-500 font-medium" id="Services">
              Mes Services
            </h1>
          </div>

          <motion.div
            className="flex md:flex-row flex-col gap-3 pt-8"
            variants={buttonVariants}
            initial={"initial"}
            animate={visibilityE ? "animate" : "initial"}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {ServicesListe.map((service) => (
              <CardService service={service} key={service.Title} />
            ))}
          </motion.div>
        </aside>
      </div>
    </div>
  );
}

export default Service;

function CardService({ service }: Readonly<{ service: ServiceType }>) {
  return (
    <div className="flex flex-row py-3 px-6 gap-3 bg-white rounded-box text-black">
      <div className="flex flex-col gap-2 w-7/10">
        <h1 className="text-[14px] font-semibold">{service.Title}</h1>
        <p className="text-[12px]">{service.desciption}</p>
      </div>
    </div>
  );
}
