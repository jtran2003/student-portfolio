import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="bg-white dark:bg-stone-900 text-stone-900 min-h-screen
     font-inter"> 
        <div className="max-w-5xl w-11/12 mx-auto">
            <Intro />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    </div>
  )
}

export default App
