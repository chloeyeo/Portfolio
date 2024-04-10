import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-jacarta-200 py-6 fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-md font-semibold mr-6">Find Me:</span>
          <a
            href="mailto:your-email@gmail.com"
            className="hover:text-white mr-4"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white mr-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white mr-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaTelegram />
          </a>
        </div>
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
