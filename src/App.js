import React, { useState } from 'react';
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
    minHeight: '100vh',
  },
}

function App() {
  
  const [page, setPage] = useState('ProjectContact');

  let CurrentPage;

  if (page === 'ProjectAboutMe') CurrentPage= ProjectAboutMe;
  if (page === 'ProjectPortfolio') CurrentPage= ProjectPortfolio;
  if (page === 'ProjectContact') CurrentPage= ProjectContact;
  if (page === 'ProjectResume') CurrentPage= ProjectResume;

  return (
    <main style={styles.main}>
    <>
      <Header  />
      <Navbar setPage={setPage}/>
      <CurrentPage />
      <Footer />
    </>
    </main>
  );
}



// function App() {
//   return (
//     <main style={styles.main}>
//     <div>
//       <Header />
//       <Navbar />
//       <ProjectAboutMe />
//       <ProjectPortfolio />
//       <ProjectContact />
//       <ProjectResume />
//       <Footer />
//     </div>
//     </main>
//   );
// }

export default App;
