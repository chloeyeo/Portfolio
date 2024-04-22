import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          {/* <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Chloe Yeo
          </h1> */}
          <h1 className="text-md italic font-bold">Hello!</h1>
          {/* <p className="text-gray-500">Welcome to my portfolio!</p> */}
          <motion.h1 animate={{ fontSize: "30px", fontWeight: "bold" }}>
            I'm Chloe yeo
          </motion.h1>
          <Typewriter
            options={{
              strings: ["Welcome to My Portfolio!", "Feel free to explore!"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              wrapperClassName: "text-xl font-bold text-gray-700",
              // cursorClassName,
            }}
          />
          <p className="mt-3">Myself:</p>
          <ul className="leading-9">
            <li>🧑‍💻 A Full Stack Software Engineer</li>
            <li>🧑‍🏫 A Computer Science Student</li>
            <li>📦 ML Enthusiast</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Here are my tech stack 🔥
          </h1>
          <p className="text-gray-500">PS: I love to learn anything new!</p>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>ReactJS</li>
            <li>Tailwind</li>
            <li>Bootstrap</li>
          </ul>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>NextJS</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>AWS</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">🤙 Contact Me</h1>
          {/* <p className="text-gray-500">
            I'm very expensive but you won't regret it
          </p> */}
          <ul className="mt-6 p-3 bg-slate-200 rounded-lg">
            <li>
              📞 <a href="tel:+447895441282">+44 7895 441282</a>
            </li>
            <li>
              📧 <a href="mailto:yeochloe01@gmail.com">yeochloe01@gmail.com</a>
            </li>
          </ul>
        </Section>
      </div>
    </Scroll>
  );
};

export default Overlay;
