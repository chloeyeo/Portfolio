import React from "react"; // to use jsx syntax
import "./assets/css/tailwindStyle.css";
import "./assets/css/style.scss";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen min-w-screen">
      {/* header */}
      <Header />

      {/* footer */}
      <Footer />

      {/* main content routes */}
      <main className="flex-grow">
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
