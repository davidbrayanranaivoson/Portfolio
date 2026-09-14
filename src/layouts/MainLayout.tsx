import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";

export default function MainLayout() {
  return (
    <div className="text-[14px]">
      <NavBar />
      <main className="w-full  pb-14 ">
        {/* Ici s'affichent les pages enfants */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
