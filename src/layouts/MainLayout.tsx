import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export default function MainLayout() {
  return (
    <div className="text-[14px]">

        <NavBar />


      <main className="w-full">
        {/* Ici s'affichent les pages enfants */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
