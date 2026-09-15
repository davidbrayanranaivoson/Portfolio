import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="text-[14px]">
      <NavBar />
      <main className="w-full   h-full  bg-blue-50 pb-14 ">
        {/* Ici s'affichent les pages enfants */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
