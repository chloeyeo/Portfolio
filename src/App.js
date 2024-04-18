import { lazy, useState } from "react"; // to use jsx syntax
import "./assets/css/tailwindStyle.css";
import "./assets/css/style.scss";
import { Routes, Route } from "react-router-dom";
import DarkModeToggle from "./components/DarkModeToggle";
// import { loadFull } from "tsparticles";
// import Particles from "@tsparticles/react";
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

// async function loadParticles(main) {
//   return await loadFull(main);
// }

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

      <ParticlesComponent />

      {/* <Particles
        id="tsparticles"
        init={loadParticles}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 999,
          },
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#c9b0f9",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      /> */}

      {/* footer */}
      <Footer darkMode={darkMode} />

      {/* main content routes */}
      <main className="w-full h-screen flex justify-center items-start mt-14 mb-14">
        <Routes>
          <Route path={routes.HOME} element={<Home darkMode={darkMode} />} />
          <Route path={routes.ABOUT} element={<About darkMode={darkMode} />} />
          <Route
            path={routes.PROJECTS}
            element={<Projects darkMode={darkMode} />}
          />
          {/* <Route path={routes.Project} element={} /> */}
          <Route path={routes.CV} element={<CV darkMode={darkMode} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
