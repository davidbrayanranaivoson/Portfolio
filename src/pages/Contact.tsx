import { House, Mail, Phone } from "lucide-react";
import Formulaire from "../components/animations/Formulaire";

function Contact() {
  return (
    <div className="">
      <div className="flex items-center justify-start gap-2">
        <div className="bg-indigo-500 w-2 h-2 rounded-full"></div>
        <h1 className="text-indigo-500 font-medium" id="Contacts">
          Contact
        </h1>
      </div>
      <div className="flex flex-row justify-between ">
        <div className="w-1/4 flex flex-col  gap-2">
          <h1 className="text-2xl font-semibold">Travaillons ensemble</h1>
          <p>
            N'ésitez pas à me contacter; Je serai ravi de discuter avec vous par
            email ou sur watchapp.
          </p>
          <span className="font-semibold">David Brayan RANAIVOSON</span>
          <span className="flex items-center gap-2">
            <Mail className="w-4" />
            <a href="mailto:hopemarthe01@gmail.com">hopemarthe01@gmail.com</a>
          </span>
          <span className="flex items-center  gap-2">
            <Phone className="w-4" />
            <a href="tel:+261346427297">+261 34 64 272 97</a>
          </span>
          <span className="flex items-center  gap-2">
            <House className="w-4" />
            <span>Toamasina, Madagascar</span>
          </span>
        </div>
        <div className="w-1/4">
          <Formulaire />
        </div>
        <div className="w-1/4 flex flex-col gap-3">
          <h4 className="text-indigo-500 font-semibold">Réseaux sociaux</h4>
          <a href="https://git.org" className="flex items-center gap-3">
            <img src="/public/GitHub_Guide.png" alt="" className="w-6" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
