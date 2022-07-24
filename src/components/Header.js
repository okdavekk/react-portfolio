import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  header: {
    margin: 20,
    background: "#1f1f1f",
    color: "#ffffff",
    textAlign: "center",
    padding: 20,
    borderRadius: 8,

  },
  h1: {
    fontSize: "3.0rem",
  },
  h3: {
    fontSize: "1.5rem",
  },
};

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>David Kemp</h1>
      <h3 style={styles.h3}>My React Portfolio</h3>
    </header>
  );
}

export default Header;
