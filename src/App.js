import React from "react"; // to use jsx syntax
import "./assets/css/tailwindStyle.css";
import "./assets/css/style.scss";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* header */}
      <Header />

      {/* footer */}
      <Footer />

      {/* routes */}
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
