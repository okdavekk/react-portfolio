import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  footer: {
    margin: 20,
    background: "#1f1f1f",
    color: "#ffffff",
    textAlign: "center",
    padding: 20,
    borderRadius: 8,

  },
  h2: {
    fontSize: "1.5rem",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <h2 style={styles.h2}>Made by DK</h2>
    </footer>
  );
}

export default Footer;
