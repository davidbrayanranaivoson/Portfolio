import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Sidebar() {
  const [fixedMenu, setFixedMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
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
        <Link
          to={"/"}
          className="flex lg:static absolute left-3 items-center font-semibold"
        >
          <span className="pr-1 lg:text-2xl md:text-[14px] text-blue-400">
            DBR
          </span>
          <span className="text-[10px] lg:text-[14px]">
            David Brayan{" "}
            <span className="lg:inline-block hidden">RANAIVOSON</span>
          </span>
        </Link>
        <nav className={`lg:block ${showMenu ? "inline-block" : "hidden"}`}>
          <ul className="flex gap-5 lg:static absolute top-8 left-0 right-0 justify-center pb-2 bg-base-100">
            <a href="/#Accueil">Accueil</a>
            <a href="/#About" className="lg:inline-block hidden">
              À propos
            </a>
            <a href="#About">Compétences</a>
            <a href="#Projets" className="lg:inline-block hidden">
              Projets
            </a>
            <a href="#Services">Services</a>
            <a href="#Contacts">Contacts</a>
          </ul>
        </nav>
        <a
          href="mailto:davidbrayanranaivoson@gmail.com"
          className="btn btn-info text-white bg-linear-to-l from-blue-400 to-blue-900 hidden lg:flex"
        >
          Me contacter
        </a>
        <button
          type="button"
          className="lg:hidden absolute right-2"
          onClick={handleShowMenu}
        >
          {showMenu ? <X /> : <Menu />}
        </button>
      </div>
    </motion.div>
  );
}
