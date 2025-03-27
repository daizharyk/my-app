import { useState } from "react";
import styles from "../assets/styles/Technology.module.css";
import data from "../data/data.json";

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(data.technology[0]);

  const [isAnimating, setIsAnimating] = useState(true);

  const handleCrewChange = (technology) => {
    if (technology.name === activeTechnology.name) return;

    setIsAnimating(false);

    setTimeout(() => {
      setActiveTechnology(technology);
      setIsAnimating(true);
    }, 300);
  };

  return (
    <div className={styles.crew}>
      <h3 className="subtitle">
        <span>03</span> SPACE LAUNCH 101
      </h3>
      <section className={styles.crewContainer}>
        {/* Левая часть с информацией */}
        <article
          className={`${styles.crewInfo} ${isAnimating ? styles.active : ""}`}
        >
          <h2 className={styles.role}>THE TERMINOLOGY…</h2>
          <h1 className={styles.name}>{activeTechnology.name}</h1>
          <p className={styles.description}>{activeTechnology.description}</p>
          <ul className={styles.crewList}>
            {data.technology.map((technology) => (
              <li
                key={technology.name}
                className={
                  activeTechnology.name === technology.name ? styles.active : ""
                }
                onClick={() => handleCrewChange(technology)}
              >
                <span className={styles.indicator}></span>
              </li>
            ))}
          </ul>
        </article>

        {/* Правая часть с изображением */}
        <article className={styles.crewImage}>
          <img
            src={activeTechnology.images.portrait}
            className={isAnimating ? styles.active : ""}
            alt={activeTechnology.name}
          />
        </article>
      </section>
    </div>
  );
};

export default Technology;
