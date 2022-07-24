import React from "react";
// import ReactDOM from "react-dom/client";
import { Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProjectAboutMe from "./components/ProjectAboutMe";
import ProjectContact from "./components/ProjectContact";
import ProjectPortfolio from "./components/ProjectPortfolio";
import ProjectResume from "./components/ProjectResume";
import Footer from "./components/Footer";

const styles = {
  main: {
    background: "#2f2f2f",
    paddingTop: 0.1,
    minHeight: "100vh",
  },
};
function App() {
  return (
    <main style={styles.main}>
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Navbar /> 
                  <ProjectAboutMe /> 
                  <Footer />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              path="/portfolio"
              element={
                <>
                  <Header />
                  <Navbar /> 
                  <ProjectPortfolio /> 
                  <Footer />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              path="/contact"
              element={
                <>
                  <Header />
                  <Navbar /> 
                  <ProjectContact /> 
                  <Footer />
                </>
              }
            />
          </Routes>

          <Routes>
            <Route
              path="/resume"
              element={
                <>
                  <Header />
                  <Navbar /> 
                  <ProjectResume /> 
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
