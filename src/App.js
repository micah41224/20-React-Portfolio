// import logo from './logo.svg';
import React from "react";
import './App.css';
import About from "./components/about";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import Contact from "./components/contact";
import Projects from "./components/projects";


function App() {
  return (
    <>
    <Navbar/>
    <About/>
    <Projects/>
    <Footer/>
    
    </>
  );
}

export default App;
