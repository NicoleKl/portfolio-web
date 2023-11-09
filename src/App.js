import './App.css';
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import About from "./components/About";


function App() {
  const [headerKey, setHeaderKey] = useState(0);

  useEffect(() => {
    setHeaderKey(prevKey => prevKey + 1);
  }, []);
  
  return (
    <div className="App">
      <Hero />
      <About/>
      <Projects />
      <Contacts />
      <Header key={headerKey}/>
    </div>
  );
}

export default App;
