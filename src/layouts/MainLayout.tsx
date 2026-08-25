import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export default function MainLayout() {
  return (
    <div className="text-[14px]">
      <div className="flex text-white justify-between items-center py-4 px-14 ">
        <div className="flex items-center justify-center font-semibold">
          <span className="pr-1 text-2xl text-blue-400">DBR</span>
          <span>David Brayan RANAIVOSON</span>
        </div>
        <NavBar />
        <div>
          <input
            type="button"
            value="Nous contacter"
            className="btn btn-info text-white bg-linear-to-l from-blue-400 to-blue-900"
          />
        </div>
      </div>

      <main className="w-full">
        {/* Ici s'affichent les pages enfants */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
