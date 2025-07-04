import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Why from "./components/Why";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoSplash from "./components/VideoSplash";
import SuccessfulProjects from "./components/SuccessfulProjects";

function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowSplash(true);
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {showSplash && <VideoSplash onComplete={() => setShowSplash(false)} />}
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Why />
                  <Contact />
                </>
              }
            />
            <Route path="/projects" element={<SuccessfulProjects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;