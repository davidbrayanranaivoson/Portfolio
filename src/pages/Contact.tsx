import { House, Mail } from "lucide-react";
import Formulaire from "../components/animations/Formulaire";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const buttonVariants = {
  initial: { opacity: 0, y: -30 },
  animate: {},
};
function Contact() {
  const [visibilityE, setvisibilityE] = useState(false);

  // Utilisez useEffect pour surveiller la visibilité de l'élément
  useEffect(() => {
    const targetElement = document.getElementById("Contacts");

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
    <motion.div
      variants={buttonVariants}
      initial={"initial"}
      animate={visibilityE ? "animate" : "initial"}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-start gap-2">
        <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
        <h1 className="text-indigo-500 font-medium" id="Contacts">
          Contact
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-between gap-y-14">
        <div className="md:w-2/4 flex flex-col  gap-2">
          <h1 className="text-2xl font-semibold">Travaillons ensemble</h1>
          <p>
            N'ésitez pas à me contacter; Je serai ravi de discuter avec vous par
            email.
          </p>
          <span className="font-semibold">David Brayan RANAIVOSON</span>
          <span className="flex items-center gap-2 text-indigo-500">
            <Mail className="w-4" />
            <a href="mailto:davidbrayanranaivoson@gmail.com">
              davidbrayanranaivoson@gmail.com
            </a>
          </span>
          <span className="flex items-center  gap-2">
            <House className="w-4" />
            <span>Toamasina, Madagascar</span>
          </span>
        </div>

        <div className="md:w-1/4 flex flex-col gap-3">
          <h4 className="text-indigo-500 font-semibold" id="Projets">
            Réseaux sociaux et Projets
          </h4>
          <a
            href="https://github.com/davidbrayanranaivoson"
            target="_blank"
            className="flex items-center gap-3"
          >
            <img src="/public/GitHub-Guide.png" alt="" className="w-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
