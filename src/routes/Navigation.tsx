import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Calendar from "../components/Calendar/CalendarPage";
import CalendarPublic from "../components/CalendarPublic/CalendarPublicPage";
import { Counter } from "../components/Counter/Counter";
import Crud from "../components/Crud/Crud";
import Pokeapi from "../components/Pokeapi/Pokeapi";
import TestComponent from "../components/TestComponent/TestComponent";
import { useAuthStore } from "../hooks/useAuthStore";
import ScorersTablePage from "../pages/ScorersTablePage/ScorersTable";
import IndexHomePage from "../pages/HomePage/Index";
import IndexNewsPage from "../pages/NewsPage/Index";
import IndexContactPage from "../pages/ContactPage/Index";
import IndexMediaPage from "../pages/MediaPage/Index";
import IndexUsPage from "../pages/UsPage/Index";
import IndexResultsPage from "../pages/ResultsPage/Index";
import IndexFixturePage from "../pages/FixturePage/Index";
import IndexTeamPage from "../pages/TeamPage/Index";
import PositionsTablePage from "../pages/PositionsTablePage/PositionsTable";

const Navigation = () => {
  const { status, checkAuthToken } = useAuthStore();
  // const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <h3>Cargando...</h3>;
  }

  return (
    <>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/home" element={<IndexHomePage />} />
            <Route path="/us" element={<IndexUsPage />} />
            <Route path="/results" element={<IndexResultsPage />} />
            <Route path="/fixture" element={<IndexFixturePage />} />
            <Route path="/scorers" element={<ScorersTablePage />} />
            <Route path="/positionsTable" element={<PositionsTablePage />} />
            <Route path="/media" element={<IndexMediaPage />} />
            <Route path="/news" element={<IndexNewsPage />} />
            <Route path="/contact" element={<IndexContactPage />} />
            <Route path="/teams" element={<IndexTeamPage />} />

            <Route path="/calendar" element={<CalendarPublic />} />
            <Route path="/calendar/:id" element={<CalendarPublic />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/counter" element={<Counter />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="/pokeapi" element={<Pokeapi />} />
            <Route path="/crud" element={<Crud />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/" element={<TestComponent />} />
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
          </>
        )}
      </Routes>
    </>
  );
};

export default Navigation;
