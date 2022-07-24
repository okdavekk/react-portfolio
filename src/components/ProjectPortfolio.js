import React from "react";
import "bootstrap/dist/css/bootstrap.css";


// const foodGeniePic = "./Assets/foodGeniePic";

const foodGenie = "https://n3330.github.io/Food-Genie/";
const moviePreferences = "https://shielded-waters-71876.herokuapp.com/";
const myPortfolio = "https://okdavekk.github.io/my-portfolio/";
const myWorkDayScheduler = "https://okdavekk.github.io/work-day-scheduler/";
const textEditor = "https://desolate-beyond-67319.herokuapp.com/";
const seoRefactor = "https://okdavekk.github.io/seo-refactor/";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
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
    alignItems: "center",

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
  input: {
    margin: 20,
    height: 200,
    width: 200,
  },
};

function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Portfolio</div>
      <div style={styles.content}>

          <button>
            <h4>Food Genie</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/foodGeniePic.png")}
              alt="Food Genie"
              onClick={() => openInNewTab(foodGenie)}
            ></input>
          </button>

          <button>
            <h4>Movie Preferences</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/moviePreferencesPic.png")}
              alt="Movie Preferences"
              onClick={() => openInNewTab(moviePreferences)}
            ></input>
          </button>

          <button>
            <h4>My HTML & CSS Portfolio</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/myPortfolioPic.png")}
              alt="My Portfolio"
              onClick={() => openInNewTab(myPortfolio)}
            ></input>
          </button>

          <button>
            <h4>My Work Day Scheduler</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/myWorkDaySchedulerPic.png")}
              alt="My Work Day Scheduler"
              onClick={() => openInNewTab(myWorkDayScheduler)}
            ></input>
          </button>

          <button>
            <h4>Text Editor</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/textEditorPic.png")}
              alt="Text Editor"
              onClick={() => openInNewTab(textEditor)}
            ></input>
          </button>

          <button>
            <h4>SEO Refactor</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/seoRefactorPic.png")}
              alt="SEO Refactor"
              onClick={() => openInNewTab(seoRefactor)}
            ></input>
          </button>
      </div>
    </div>
  );
}

export default Card;
