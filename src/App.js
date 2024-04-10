import React from "react"; // to use jsx syntax
import "./assets/css/tailwindStyle.css";
import "./assets/css/style.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./pages/About";
import { FaReact } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiPersonArmsSpread } from "react-icons/pi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import Footer from "./components/Footer";

function App() {
  const mainMenu = [
    { name: "Home", url: "/", icon: <IoHomeOutline /> },
    { name: "About", url: "/about", icon: <PiPersonArmsSpread /> },
    { name: "Projects", url: "/projects", icon: <LiaProjectDiagramSolid /> },
    { name: "CV / Resume", url: "/cv", icon: <IoDocumentTextOutline /> },
  ];
  return (
    <>
      <div className="bg-jacarta-200">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-4">
            <FaReact />
            Chloe Yeo
          </h1>
          <nav>
            <ul className="flex gap-4">
              {mainMenu.map((item, i) => (
                <li
                  key={i}
                  className="px-2 py-1 rounded bg-jacarta-50 hover:bg-jacarta-200"
                >
                  <NavLink
                    to={item.url}
                    className="flex items-center text-sm font-semibold"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* footer */}
      <Footer />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
