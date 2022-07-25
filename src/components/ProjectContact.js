import React from "react";
import Form from './Form';

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
    fontSize: "1.2rem",
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
      <div style={styles.heading}>Contact</div>
      <div style={styles.content}>
<Form />
      </div>
    </div>
  );
}

export default Card;
