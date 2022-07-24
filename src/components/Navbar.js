import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  navbar: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    background: "#1f1f1f",
    justifyContent: 'center',

  },
  button: {
    display: "flex",
    background: "#9a74db",
    fontSize: "1.2rem",
    color: "white",
    alignItems: "center",
  },
};

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <button
        style={styles.button}
        // onClick={props.handleIncrement}
      >
        About Me
      </button>
      <button
        style={styles.button}
        // onClick={props.handleIncrement}
      >
        Portfolio
      </button>
      <button
        style={styles.button}
        // onClick={props.handleIncrement}
      >
        Contact
      </button>
      <button
        style={styles.button}
        // onClick={props.handleIncrement}
      >
        Resume
      </button>
    </nav>
  );
}

export default Navbar;
