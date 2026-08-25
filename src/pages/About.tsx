export default function About() {
  return (
    <div className="h-dvh bg-blue-50 px-14 text-[14px] text-black py-8">
      <div className="flex flex-col justify-start">
        <div className="flex items-center justify-start gap-2">
          <div className="bg-indigo-700 w-2 h-2 rounded-full"></div>
          <h1 id="About" className="text-indigo-600 font-semibold">
            À propos de moi
          </h1>
        </div>
        <div className="flex justify-evenly">
          <div className="flex flex-col w-1/4 gap-4">
            <h1 className="text-2xl font-bold">Qui suis-je ?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum accusamus quis excepturi rem magnam fuga hic minima?
              Veritatis, modi? Facere, eius autem. Similique numquam
              perspiciatis officiis iusto repellat inventore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              nostrum accusamus quis excepturi rem magnam fuga hic minima?
              Veritatis, modi? Facere, eius autem.
            </p>
          </div>
          <div className=" w-1/4">
            <div className="p-2 shadow-2xl rounded-box shadow-gray-400">
              <img src="/public/top.png" alt="" width={"100%"} className="rounded-box"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
