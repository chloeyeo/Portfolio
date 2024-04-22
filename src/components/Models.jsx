import { useGLTF, useScroll } from "@react-three/drei";
/* useGLTF = for loading GLTF models
useScroll = for tracking scroll position
gsap = (greensock animation platform) library for animation */
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import PumpkinCat from "./PumpkinCat";
import EarPod from "./EarPod";
// import PumpkinCat from "./PumpkinCat";

/* FLOOR_HEIGHT = constant representing the height of each floor
in the office scene
NB_FLOORS = constant representing the number of floors in the
office scene */
export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export default function Models(props) {
  const { nodes, materials } = useGLTF("./models/WawaOffice.glb");
  const ref = useRef();
  const tl = useRef(); // animation timeline
  const libraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline(); // sequence and syncrhonize animations
    // control timing and ordering of animations

    // VERTICAL ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
      },
      0
    );

    // Office Rotation
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
      0
    );
    tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: -Math.PI / 6, z: 0 },
      1
    );

    // Office movement
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: -1,
        z: 2,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        x: 1,
        z: 2,
      },
      1
    );

    // LIBRARY FLOOR
    tl.current.from(
      libraryRef.current.position,
      {
        duration: 0.5,
        x: -2,
      },
      0.5
    );
    tl.current.from(
      libraryRef.current.rotation,
      {
        duration: 0.5,
        y: -Math.PI / 2,
      },
      0
    );

    // ATTIC
    tl.current.from(
      atticRef.current.position,
      {
        duration: 1.5,
        y: 2,
      },
      0
    );

    tl.current.from(
      atticRef.current.rotation,
      {
        duration: 0.5,
        y: Math.PI / 2,
      },
      1
    );

    tl.current.from(
      atticRef.current.position,
      {
        duration: 0.5,

        z: -2,
      },
      1.5
    );
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <EarPod />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <EarPod />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes["03_attic"].geometry}
            material={materials["03"]}
          />
        </group>
      </group>
    </group>
  );
}

// ensures the model is loaded before it's rendered
useGLTF.preload("./models/WawaOffice.glb");
