import { BiSun, BiMoon } from "react-icons/bi";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <button
        onClick={toggleDarkMode}
        className={`${
          darkMode
            ? "bg-jacarta-500 text-white hover:bg-jacarta-100 hover:text-black"
            : "bg-jacarta-100 text-black hover:bg-jacarta-500 hover:text-white"
        } fixed font-bold flex justify-center items-center bottom-20 right-5 rounded-full py-2 px-4 shadow-md z-10 focus:outline-none focus:shadow-outline`}
      >
        {darkMode ? <BiSun /> : <BiMoon />}
        <span className="ml-2">{darkMode ? "Dark Mode" : "Light Mode"}</span>
      </button>
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-4 right-4 bg-jacarta-400 hover:bg-jacarta-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {darkMode ? <BiSun /> : <BiMoon />}
        <span className="ml-2">{darkMode ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </>
  );
};

export default DarkModeToggle;
