import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  navbar: {
    display: "flex",
    marginLeft: 20,
    marginRight: 20,
    background: "#2f2f2f",
    justifyContent: 'center',

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
