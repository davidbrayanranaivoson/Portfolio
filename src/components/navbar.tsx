import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <div className="flex text-white justify-between items-center py-4 px-14 ">
      <div className="flex items-center justify-center font-semibold">
        <span className="pr-1 text-2xl text-blue-400">DBR</span>
        <span>David Brayan RANAIVOSON</span>
      </div>
      <nav className="font-stretch-90%">
        <ul className="flex gap-5 items-center justify-center">
          <Link to="/">Accueil</Link>
          <a href="#About">À propos</a>
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
  );
}
