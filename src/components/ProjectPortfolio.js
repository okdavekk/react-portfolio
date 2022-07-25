import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const foodGenieDeployed = "https://n3330.github.io/Food-Genie/";
const moviePreferencesDeployed = "https://shielded-waters-71876.herokuapp.com/";
const myPortfolioDeployed = "https://okdavekk.github.io/my-portfolio/";
const myWorkDaySchedulerDeployed = "https://okdavekk.github.io/work-day-scheduler/";
const textEditorDeployed = "https://desolate-beyond-67319.herokuapp.com/";
const seoRefactorDeployed = "https://okdavekk.github.io/seo-refactor/";

const foodGenieGithub ="https://github.com/N3330/Food-Genie";
const moviePreferencesGithub ="https://github.com/okdavekk/movie-preferences";
const myPortfolioGithub ="https://github.com/okdavekk/my-portfolio";
const myWorkDaySchedulerGithub ="https://github.com/okdavekk/work-day-scheduler";
const textEditorGithub ="https://github.com/okdavekk/text-editor";
const seoRefactorGithub ="https://github.com/okdavekk/seo-refactor";

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

          <section>
            <h4>Food Genie</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/foodGeniePic.png")}
              alt="Food Genie"
            ></input>
            <button
            style={styles.button}
            onClick={() => openInNewTab(foodGenieDeployed)}>
            Food Genie Deployed Site
            </button>
            <button
            style={styles.button}
            onClick={() => openInNewTab(foodGenieGithub)}>
            Food Genie Github
            </button>
            <br></br>

          </section>
          <section>
            <h4>Movie Preferences</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/moviePreferencesPic.png")}
              alt="Movie Preferences"
            ></input>
            <button
            style={styles.button}
            onClick={() => openInNewTab(moviePreferencesDeployed)}>
            Movie Preferences Deployed Site
            </button>
            <button
            style={styles.button}
            onClick={() => openInNewTab(moviePreferencesGithub)}>
            Movie Preferences Github
            </button>
            <br></br>

          </section>
          <section>
            <h4>My HTML & CSS Portfolio</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/myPortfolioPic.png")}
              alt="My Portfolio"
              onClick={() => openInNewTab(myPortfolioDeployed)}
            ></input>
           <button
            style={styles.button}
            onClick={() => openInNewTab(myPortfolioDeployed)}>
            My Portfolio Deployed Site
            </button>
            <button
            style={styles.button}
            onClick={() => openInNewTab(myPortfolioGithub)}>
            My Portfolio Github
            </button>
            <br></br>

          </section>
          <section>
            <h4>My Work Day Scheduler</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/myWorkDaySchedulerPic.png")}
              alt="My Work Day Scheduler"
              onClick={() => openInNewTab(myWorkDaySchedulerDeployed)}
            ></input>
            <button
            style={styles.button}
            onClick={() => openInNewTab(myWorkDaySchedulerDeployed)}>
            My Work Day Scheduler Deployed Site
            </button>
            <button
            style={styles.button}
            onClick={() => openInNewTab(myWorkDaySchedulerGithub)}>
            My Work Day Scheduler Github
            </button>

            <br></br>

            </section>
            <section>
            <h4>Text Editor</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/textEditorPic.png")}
              alt="Text Editor"
              onClick={() => openInNewTab(textEditorDeployed)}
            ></input>
            <button
            style={styles.button}
            onClick={() => openInNewTab(textEditorDeployed)}>
            Text Editor Deployed Site
            </button>
            <button
            style={styles.button}
            onClick={() => openInNewTab(textEditorGithub)}>
            Text Editor Github
            </button>

            <br></br>

            </section>
            <section>
            <h4>SEO Refactor</h4>
            <input
              style={styles.input}
              type="image"
              src={require("./Assets/seoRefactorPic.png")}
              alt="SEO Refactor"
              onClick={() => openInNewTab(seoRefactorDeployed)}
            ></input>
            <button
            style={styles.button}
            onClick={() => openInNewTab(seoRefactorDeployed)}>
            SEO Refactor Deployed Site
            </button>
            <button
            style={styles.button}
            onClick={() => openInNewTab(seoRefactorGithub)}>
            SEO Refactor Github
            </button>
            </section>
      </div>
    </div>
  );
}

export default Card;
