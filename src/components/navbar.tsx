import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function NavBar() {
  const [fixedMenu, setFixedMenu] = useState(false);

  useEffect(() => {
    let previousY: number;
    let currentY: number;
    window.addEventListener("scroll", function () {
      previousY = currentY;
      currentY = window.scrollY;
      if (previousY < currentY) {
        console.log("Bas");
        setFixedMenu(true);
      } else if (previousY > currentY) {
        console.log("Haut");
        setFixedMenu(false);
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${fixedMenu ? "fixed opacity-90" : "absolute"} z-20 left-0 right-0 bg-base-100 transition-all duration-200`}
    >
      <div className="flex text-white justify-between items-center py-4 px-14">
        <Link to={"/"} className="flex items-center font-semibold">
          <span className="pr-1 text-2xl text-blue-400">DBR</span>
          <span>David Brayan RANAIVOSON</span>
        </Link>
        <nav>
          <ul className="flex gap-5">
            <a href="/#Accueil">Accueil</a>
            <a href="/#About">À propos</a>
            <a href="#About">Compétences</a>
            <a href="#Projets">Projets</a>
            <a href="#Services">Services</a>
            <a href="#Temoignages">Témoignages</a>
            <a href="#Contacts">Contacts</a>
          </ul>
        </nav>
        <div>
          <input
            type="button"
            value="Me contacter"
            className="btn btn-info text-white bg-linear-to-l from-blue-400 to-blue-900"
          />
        </div>
      </div>
    </motion.div>
  );
}
