import { OrbitControls, ScrollControls } from "@react-three/drei";
import Office from "./Office";
// import Models from "./Models";
import Overlay from "./Overlay";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Office />
        {/* <Models /> */}
        <Overlay />
      </ScrollControls>
    </>
  );
};

export default Experience;
