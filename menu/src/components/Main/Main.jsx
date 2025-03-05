import { Routes, Route } from "react-router-dom";
import HomePage from "@/components/pages/HomePage/HomePage";
import DriftPage from "@/components/pages/DriftPage/DriftPage";
import TimeAttackPage from "@/components/pages/TimeAttackPage/TimeAttackPage";
import ForzaPage from "@/components/pages/ForzaPage/ForzaPage";

export default function Main() {
  return (
    <div className="container">
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift-taxi" element={<DriftPage />} />
          <Route path="/time-attack" element={<TimeAttackPage />} />
          <Route path="/forza-karting" element={<ForzaPage />} />
        </Routes>
      </main>
    </div>
  );
}
