import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProjectAboutMe from './components/ProjectAboutMe';
import ProjectContact from './components/ProjectContact';
import ProjectPortfolio from './components/ProjectPortfolio';
import ProjectResume from './components/ProjectResume';
import Footer from './components/Footer';

const styles = {
  main: {
    background: "#2f2f2f",
    paddingTop: 0.1,
    height: '100vh',
  },
}
function App() {
  return (
    <main style={styles.main}>
    <div>
      <Header />
      <Navbar />
      <ProjectAboutMe />
      <ProjectContact />
      <ProjectPortfolio />
      <ProjectResume />
      <Footer />
    </div>
    </main>
  );
}

export default App;
