import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="font-stretch-90%">
      <ul className="flex gap-5 items-center justify-center">
        <Link to="/">Accueil</Link>
        <a href="#About">À propos</a>
        <a href="#Competences">Compétences</a>
        <a href="#Projets">Projets</a>
        <a href="#Services">Services</a>
        <a href="#Temoignages">Témoignages</a>
        <a href="#Contacts">Contacts</a>
      </ul>
    </nav>
  );
}
