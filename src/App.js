import React from "react";
import "./styles.css";
import Header from "./components/header/index.js";
import Letra from "./components/letra/index.js";
import Footer from "./components/footer/index.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Letra />
      <Footer />
    </div>
  );
}
