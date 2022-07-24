import React from "react";
import { Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  navbar: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    background: "#2f2f2f",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    background: "#9a74db",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
    borderRadius: 8,
    margin: 4,
  },
};

function Navbar() {
  const history = Router();

  const aboutMePage = () => {
    history.push("/");
  };

  const portfolioPage = () => {
    history.push("/portfolio");
  };

  const contactPage = () => {
    history.push("/contact");
  };

  const resumePage = () => {
    history.push("/resume");
  };

  return (
    <nav style={styles.navbar}>
      <button style={styles.button} onClick={aboutMePage}>
        About Me
      </button>

      <button style={styles.button} onClick={portfolioPage}>
        Portfolio
      </button>

      <button style={styles.button} onClick={contactPage}>
        Contact
      </button>

      <button style={styles.button} onClick={resumePage}>
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
