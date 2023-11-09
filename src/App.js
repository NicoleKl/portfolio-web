import './App.css';
import { useState, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About/>
      <Projects />
      <Contacts/>
    </div>
  );
}

export default App;
