// import ReactFullpage from "@fullpage/react-fullpage";
import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`home ${
        darkMode ? "dark" : "bg-gray-100"
      } min-h-screen py-10 mb-16`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`${
            darkMode ? "bg-gray-500" : "bg-white"
          } rounded-lg shadow-lg p-8`}
        >
          <h1 className="header text-2xl font-bold mb-8">
            Welcome to My Portfolio
          </h1>
          <p
            className={`${
              darkMode ? "text-white" : "text-gray-800"
            } text-lg mb-8`}
          >
            This is the main landing page of my portfolio website. Feel free to
            explore!
          </p>
          <button
            onClick={toggleDarkMode}
            className="bg-jacarta-400 hover:bg-jacarta-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {darkMode ? <BiSun /> : <BiMoon />}
            <span className="ml-2">
              {darkMode ? "Light Mode" : "Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
