import { FaReact } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { PiPersonArmsSpread } from "react-icons/pi";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { IoDocumentTextOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = ({ darkMode }) => {
  const mainMenu = [
    { name: "Home", url: "/", icon: <IoHomeOutline /> },
    { name: "About", url: "/about", icon: <PiPersonArmsSpread /> },
    { name: "Projects", url: "/projects", icon: <LiaProjectDiagramSolid /> },
    { name: "CV / Resume", url: "/cv", icon: <IoDocumentTextOutline /> },
  ];
  return (
    <div
      className={`${
        darkMode ? "bg-jacarta-400 text-white" : "bg-jacarta-100"
      } fixed top-0 w-full`}
    >
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
                className={`px-2 py-1 rounded ${
                  darkMode ? "bg-jacarta-500" : "bg-jacarta-50"
                } hover:bg-jacarta-200`}
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
  );
};

export default Header;
