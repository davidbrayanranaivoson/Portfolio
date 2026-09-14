import { Send } from "lucide-react";

function Formulaire() {
  return (
    <form action="" className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          disabled={true}
          type="text"
          name="name"
          className="bg-white rounded-md outline-0 p-2"
          placeholder="Votre nom"
        />
        <input
          disabled={true}
          type="email"
          className="bg-white rounded-md outline-0 p-2"
          placeholder="Votre email"
        />
      </div>
      <div className="">
        <input
          disabled={true}
          type="text"
          placeholder="Sujet"
          name="objet"
          className="bg-white rounded-md outline-0 p-2 w-1/1"
        />
      </div>
      <div className="">
        <textarea
          disabled={true}
          name="message"
          id=""
          placeholder="Votre message"
          className="bg-white rounded-md outline-0 p-2 w-1/1 h-20"
        ></textarea>
      </div>
      <label
        form="btn-submit"
        className="text-white font-semibold cursor-pointer flex items-center justify-center w-1/1 bg-blue-700 rounded-md p-2"
      >
        <input
          type="submit"
          name=""
          id="btn-submit"
          placeholder="Envoyer le message"
          className=""
          disabled={true}
        />
        <Send className="h-3" />
      </label>
    </form>
  );
}

export default Formulaire;
