import { Divide, Newspaper } from "lucide-react";
const styleiconService =
  "w-1/1 h-3/10 bg-purple-300 text-purple-700 rounded-box";
export const ServicesListe = [
  {
    Title: "Création de sites vitrines",
    iconService: <Divide className={styleiconService} />,
    desciption:
      "Sites modernes et responsive pour présenter une activité, un service, une association ou un projet.",
  },
  {
    Title: "Intégration /Frontend",
    iconService: <Divide className={styleiconService} />,
    desciption:
      "Transformation d'une maquette ou d'une idée visuelle en interface web fonctionnelle.",
  },
  {
    Title: "Applications Web",
    iconService: <Divide className={styleiconService} />,
    desciption:
      "Développement d'applications web avec frontend et backend, gestion des données et API.",
  },
  {
    Title: "Interface web modernes",
    iconService: <Newspaper className={styleiconService} />,
    desciption:
      "Création d'interfaces React avec une attention particulière portée au responsive design et à l'expérience utilisateur.",
  },
];
