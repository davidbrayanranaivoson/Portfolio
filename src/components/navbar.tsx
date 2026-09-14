import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <motion.div
      initial={{ y: -150 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ zIndex: 50 }}
      className="absolute left-0 right-0"
    >
      <div className="flex text-white justify-between items-center py-4 px-14">
        <div className="flex items-center font-semibold">
          <span className="pr-1 text-2xl text-blue-400">DBR</span>
          <span>David Brayan RANAIVOSON</span>
        </div>
        <nav>
          <ul className="flex gap-5">
            <Link to="/">Accueil</Link>
            <a href="/#About">À propos</a>
            <a href="#Competences">Compétences</a>
            <a href="#Projets">Projets</a>
            <a href="#Services">Services</a>
            <a href="#Temoignages">Témoignages</a>
            <Link to="Statistics">Contacts</Link>
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
