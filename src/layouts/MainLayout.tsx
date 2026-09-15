import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="text-[14px]">
      <Sidebar />
      <main className="w-full h-full bg-blue-50 pb-14 ">
        {/* Ici s'affichent les pages enfants */}
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
