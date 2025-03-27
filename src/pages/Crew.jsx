import { useState } from "react";
import styles from "../assets/styles/Crew.module.css";
import data from "../data/data.json";

const Crew = () => {
  const [activeCrew, setActiveCrew] = useState(data.crew[0]);

  const [isAnimating, setIsAnimating] = useState(true);

  const handleCrewChange = (crew) => {
    if (crew.name === activeCrew.name) return;

    setIsAnimating(false);

    setTimeout(() => {
      setActiveCrew(crew);
      setIsAnimating(true);
    }, 300);
  };

  return (
    <div className={styles.crew}>
      <h3 className="subtitle">
        <span>02</span> Meet your crew
      </h3>
      <section className={styles.crewContainer}>
        {/* Левая часть с информацией */}
        <article
          className={`${styles.crewInfo} ${isAnimating ? styles.active : ""}`}
        >
          <h2 className={styles.role}>{activeCrew.role}</h2>
          <h1 className={styles.name}>{activeCrew.name}</h1>
          <p className={styles.description}>{activeCrew.bio}</p>
          <ul className={styles.crewList}>
            {data.crew.map((crew) => (
              <li
                key={crew.name}
                className={activeCrew.name === crew.name ? styles.active : ""}
                onClick={() => handleCrewChange(crew)}
              >
                <span className={styles.indicator}></span>
              </li>
            ))}
          </ul>
        </article>

        {/* Правая часть с изображением */}
        <article className={styles.crewImage}>
          <img
            src={activeCrew.images.png}
            className={isAnimating ? styles.active : ""}
            alt={activeCrew.name}
          />
        </article>
      </section>
    </div>
  );
};

export default Crew;
