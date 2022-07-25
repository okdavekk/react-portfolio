import React from "react";
import Pic from "./Assets/pic.png";
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
  image: {
    height: 200,
    padding: 20,
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        <img style={styles.image} src={Pic} alt="Me" />
        <p>
          I am a current student but started a consulting company recently and
          will be working to help Drone Seed refactor their maintenance and
          operations documentation to be more efficient and comply with Federal
          Aviation Adminsitartion regulations.
        </p>
      </div>
    </div>
  );
}

export default Card;
