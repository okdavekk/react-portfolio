import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
  card: {
    margin: 20,
    background: "#1f1f1f",
    borderRadius: 8,
  },
  heading: {
    background: "#9a74db",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "2.0rem",
    color: "white",
    padding: "0 20px",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 20,
    color: "white",
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Resume</div>
      <div style={styles.content}>
        <p>
          I choose not to have my full resume downloadable to the public at this
          time. Sorry.
        </p>
        <a type="button" href="./Assets/Resume.pdf" download>
          Click To Download A Sample Resume
        </a>
      </div>
    </div>
  );
}

export default Card;
