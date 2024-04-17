// import { useState } from "react";
// import { BiSun, BiMoon } from "react-icons/bi";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Home = ({ darkMode }) => {
  // const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    // className={`home ${
    //   darkMode ? "dark" : "bg-gray-100"
    // } min-h-screen py-10 mb-16`}
    <div>
      <div className="container mx-auto px-4">
        <div
          className={`homeWrap ${
            darkMode ? "bg-gray-500" : "bg-white"
          } rounded-lg shadow-lg p-8 mt-10`}
        >
          <div className="homeText">
            <h1 className="header text-2xl font-bold mb-8">
              Welcome to My Portfolio
            </h1>
            <p
              className={`${
                darkMode ? "text-white" : "text-gray-800"
              } text-lg mb-8`}
            >
              This is the main landing page of my portfolio website. Feel free
              to explore!
            </p>
            {/* <button
              onClick={toggleDarkMode}
              className="bg-jacarta-400 hover:bg-jacarta-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {darkMode ? <BiSun /> : <BiMoon />}
              <span className="ml-2">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </button> */}
          </div>
          <LazyLoadImage
            // effect="blur"
            alt="profile image"
            src="/images/coder3.png"
            wrapperClassName="profileImage"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
