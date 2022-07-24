import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const foodGenie = "https://n3330.github.io/Food-Genie/";
const moviePreferences = "https://shielded-waters-71876.herokuapp.com/";
const myPortfolio = "https://okdavekk.github.io/my-portfolio/";
const myWorkDayScheduler = "https://okdavekk.github.io/work-day-scheduler/";
const textEditor = "https://desolate-beyond-67319.herokuapp.com/";
const seoRefactor = "https://okdavekk.github.io/seo-refactor/";

const openInNewTab = url => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

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

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Portfolio</div>
      <div style={styles.content}>
<ul>
      <li>
        <button style={styles.button} onClick={() => openInNewTab(foodGenie)}>
        Food Genie
      </button>
      </li>

      <li>
      <button style={styles.button} onClick={() => openInNewTab(moviePreferences)}>
        Movie Preferences
      </button>
      </li>

      <li>
      <button style={styles.button} onClick={() => openInNewTab(myPortfolio)}>
        My HTML & CSS Portfolio
      </button>
      </li>

      <li>
      <button style={styles.button} onClick={() => openInNewTab(myWorkDayScheduler)}>
        My Work Day Scheduler
      </button>
      </li>

      <li>
      <button style={styles.button} onClick={() => openInNewTab(textEditor)}>
        Text Editor
      </button>
      </li>

      <li>
      <button style={styles.button} onClick={() => openInNewTab(seoRefactor)}>
        SEO Refactor
      </button>
      </li>

      </ul>
      </div>
    </div>
  );
}

export default Card;
