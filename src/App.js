import { lazy, useState } from "react"; // to use jsx syntax
import "./assets/css/tailwindStyle.css";
import { Routes, Route } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle";
import ParticlesComponent from "./components/ParticlesComponent";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const CV = lazy(() => import("./pages/CV"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT: "/projects/:projectId",
  CV: "/cv",
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      } flex flex-col min-h-screen min-w-screen`}
    >
      {/* dark mode toggle */}
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* header */}
      <Header darkMode={darkMode} />

      {/* main content routes */}
      <main className="w-full h-screen flex justify-center items-start mt-14 mb-14">
        <Routes>
          <Route path={routes.HOME} element={<Home darkMode={darkMode} />} />
          <Route path={routes.ABOUT} element={<About darkMode={darkMode} />} />
          <Route
            path={routes.PROJECTS}
            element={<Projects darkMode={darkMode} />}
          />
          <Route path={routes.CV} element={<CV darkMode={darkMode} />} />
        </Routes>
      </main>

      <ParticlesComponent />

      {/* footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
