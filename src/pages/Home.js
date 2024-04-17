import { LazyLoadImage } from "react-lazy-load-image-component";
import Typewriter from "typewriter-effect";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";

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
            darkMode ? "bg-jacarta-200 shadow-white" : "bg-white shadow-lg"
          } rounded-lg p-8 mt-10`}
        >
          <div>
            <div className="textWrap">
              <h1 className="text-lg italic font-bold">Hello!</h1>
              <h1 className="text-2xl font-bold mb-8">I'm Chloe Yeo</h1>
              <Typewriter
                options={{
                  strings: [
                    "Welcome to My Portfolio!",
                    "Feel free to explore!",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  wrapperClassName: "text-2xl font-bold",
                  // cursorClassName,
                }}
              />
            </div>
            {/* <p
              className={`${
                darkMode ? "text-white" : "text-gray-800"
              } text-lg mt-8`}
            >
              This is the main landing page of my portfolio website. Feel free
              to explore!
            </p> */}
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
            effect="black-and-white"
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
