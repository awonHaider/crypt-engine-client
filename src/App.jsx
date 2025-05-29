import React from "react";
import Header from "../src/Layout/header.jsx";
import Sidebar from "../src/Layout/sidebar.jsx";
import Footer from "../src/Layout/footer.jsx";
import CaesarCipher from "./Pages/CaesarCipher.jsx";
import MonoalphabeticCipher from "./Pages/MonoalphabeticCipher.jsx";
import PlayfairCipher from "./Pages/PlayfairCipher.jsx";
import { Routes, Route } from "react-router-dom";
import OnetimepadCipher from "./Pages/OnetimepadCipher.jsx";
import TranspositionalCipher from "./Pages/TranspositionalCipher.jsx";

function App() {
  return (
    <>
      <Header />
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className=" col-span-1 md:col-span-4">
            <Routes>
              <Route path="/" element={<CaesarCipher />} />
              <Route path="caesar-cipher" element={<CaesarCipher />} />
              <Route
                path="monoalphabetic-cipher"
                element={<MonoalphabeticCipher />}
              />
              <Route path="playfair-cipher" element={<PlayfairCipher />} />
              <Route path="onetimepad-cipher" element={<OnetimepadCipher />} />
              <Route
                path="transpositional-cipher"
                element={<TranspositionalCipher />}
              />
            </Routes>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
