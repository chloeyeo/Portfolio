import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  return (
    <footer
      className={`${
        darkMode ? "bg-jacarta-400 text-white" : "bg-jacarta-100"
      }  py-6 fixed bottom-0 w-full`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-md font-semibold mr-6">Find Me:</span>
          <a
            href="mailto:yeochloe01@gmail.com"
            className="hover:text-white mr-4"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/chloeyeo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white mr-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chloe-yeo-5aa15b1ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white mr-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/chloeyeocodes"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTelegram />
          </a>
        </div>
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Chloe Yeo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
