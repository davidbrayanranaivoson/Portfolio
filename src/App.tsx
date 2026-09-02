// Example Project Data (simulated) - in the Dashboard component

import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Projet from "./pages/Projet";
import Home from "./pages/Home";

// Inside your Dashboard Component, you'd render the CardTable component for each item in projectsData.

export default function App() {
  return (
    <Routes>
      {/* Layout principal */}
      <Route path="/" element={<MainLayout />}>
        {/* Pages normales */}
        <Route index element={<Home />} />
        <Route path="Statistics" element={<Projet />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
