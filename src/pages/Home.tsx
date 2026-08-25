import {
  ArrowRight,
  ContactRound,
  DivideSquare,
  Expand,
  Heart,
} from "lucide-react";
import ImageLink from "../components/ImageLink";
import { CardHome } from "../components/CardHome";
import About from "./About";

export default function Home() {
  return (
    <div className="">
      <header className="flex gap-4 px-14 pb-12">
        <aside className="flex flex-col gap-7 justify-start pt-16">
          <div className="flex">
            <div className="flex text-[12px] gap-1 badge-soft rounded-full p-3 items-center justify-center">
              <div className="bg-emerald-700 w-2 h-2 rounded-full"></div>
              <input type="button" value="Disponible pour freelance" />
            </div>{" "}
          </div>
          <p className="text-5xl font-semibold font-stretch-90% grow-0">
            Je crée des sites web <br />
            <span className="text-blue-500">modernes et performants</span>
            <br />
            pour votre business
          </p>
          <div className="text-gray-400">
            <p>Développeur Full Stack passionné par le web.</p>
            <p>
              Je transforme vos idées en applications web rapides, <br />{" "}
              sécurisées et evolutives
            </p>
          </div>
          <div className="flex gap-4">
            <div className="btn btn-info text-white bg-linear-to-l from-blue-400 to-blue-900">
              <input type="button" value={"Voir mes projets"} className="" />
              <ArrowRight width={"18px"} />
            </div>
            <div className="btn btn-soft text-white border-2 border-zinc-600">
              <input type="button" value={"Me contacter"} className="" />
              <ContactRound width={"18px"} />
            </div>
          </div>
          <ImageLink />
        </aside>
        <aside className="flex  text-[12px] items-center justify-center relative grow pointer-events-none">
          <div className="flex justify-center items-center">
            <CardHome
              positionCard="top-35 left-0"
              titleCard={"Exprérience"}
              expirienceCard={"+2 ans"}
              noteCard={"Développement"}
              iconCard={<Heart className="size-4" />}
            />
            <CardHome
              positionCard="top-35 right-5"
              titleCard={"Projets réalisés"}
              expirienceCard={"15+"}
              noteCard={"Projets complets"}
              iconCard={<Expand className="size-4" />}
            />

            <CardHome
              positionCard="bottom-10 right-25"
              titleCard={"Clients satisfaits"}
              expirienceCard={"10+"}
              noteCard={"Recommandations"}
              iconCard={<DivideSquare className="size-4" />}
            />
            <img
              src="/public/my-profil.png"
              alt=""
              width="80%"
              className="rounded-full bg-linear-0 from-blue-300 to-blue-800"
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </aside>
      </header>
      <About />
    </div>
  );
}
