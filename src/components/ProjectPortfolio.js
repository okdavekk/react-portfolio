import React from "react";
// import { foodGeniePic }  from "./Assets/foodGenie.png";
// import { moviePreferencesPic } from "./Assets/moviePreferencesPic.png";
// import { myPortfolioPic } from "./Assets/myPortfolioPic.png";
// import { myWorkDaySchedulerPic } from "./Assets/myWorkDaySchedulerPic.png";
// import { textEditorPic } from "./Assets/textEditorPic.png";
// import { seoRefactorPic } from "./Assets/seoRefactorPic.png";
// import "bootstrap/dist/css/bootstrap.css";

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
          <button>
            <h4>Food Genie</h4>
            <img
              src="{foodGeniePic}"
              alt="Food Genie"
              onClick={() => openInNewTab(foodGenie)}
            ></img>
          </button>

          <button>
            <h4>Movie Preferences</h4>
            <img
              src="{moviePreferencesPic}"
              alt="Movie Preferences"
              onClick={() => openInNewTab(moviePreferences)}
            ></img>
          </button>

          <button>
            <h4>My HTML & CSS Portfolio</h4>
            <img
              src="{myPortfolioPic}"
              alt="My Portfolio"
              onClick={() => openInNewTab(myPortfolio)}
            ></img>
          </button>

          <button>
            <h4>My Work Day Scheduler</h4>
            <img
              src="{myWorkDaySchedulerPic}"
              alt="My Work Day Scheduler"
              onClick={() => openInNewTab(myWorkDayScheduler)}
            ></img>
          </button>

          <button>
            <h4>Text Editor</h4>
            <img
              src="{textEditorPic}"
              alt="Text Editor"
              onClick={() => openInNewTab(textEditor)}
            ></img>
          </button>

          <button>
            <h4>SEO Refactor</h4>
            <img
              src="{seoRefactorPic}"
              alt="SEO Refactor"
              onClick={() => openInNewTab(seoRefactor)}
            ></img>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Card;
