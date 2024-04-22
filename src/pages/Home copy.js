// import { LazyLoadImage } from "react-lazy-load-image-component";
// import Typewriter from "typewriter-effect";
// import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import Experience from "../components/Experience";

const Home = ({ darkMode }) => {
  return (
    <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
      <Experience />
    </Canvas>
  );
};

export default Home;
