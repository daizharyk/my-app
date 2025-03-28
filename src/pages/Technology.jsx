import { useEffect, useState } from "react";
import styles from "../assets/styles/Technology.module.css";
import data from "../data/data.json";

const Technology = () => {
  const [activeTechnology, setActiveTechnology] = useState(data.technology[0]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1200);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  }, []);

  const handleTechnologyChange = (technology) => {
    if (technology.name === activeTechnology.name) return;

    setIsAnimating(false);

    setTimeout(() => {
      setActiveTechnology(technology);
      setIsAnimating(true);
    }, 300);
  };

  return (
    <div className={styles.technology}>
      <h3 className="subtitle">
        <span>03</span> SPACE LAUNCH 101
      </h3>
      <section className={styles.technologyContainer}>
        <ul className={styles.technologyList}>
          {data.technology.map((technology, index) => (
            <li
              key={technology.name}
              className={
                activeTechnology.name === technology.name ? styles.active : ""
              }
              onClick={() => handleTechnologyChange(technology)}
            >
              {index + 1}
            </li>
          ))}
        </ul>
        {/* Левая часть с информацией */}
        <article
          className={`${styles.technologyInfo} ${
            isAnimating ? styles.active : ""
          }`}
        >
          <h2 className={styles.role}>THE TERMINOLOGY…</h2>
          <h1 className={styles.name}>{activeTechnology.name}</h1>
          <p className={styles.description}>{activeTechnology.description}</p>
        </article>

        {/* Правая часть с изображением */}
        <article className={styles.technologyImage}>
          <img
            src={
              isDesktop
                ? activeTechnology.images.portrait
                : activeTechnology.images.landscape
            }
            className={isAnimating ? styles.active : styles.hidden}
            alt={activeTechnology.name}
          />
        </article>
      </section>
    </div>
  );
};

export default Technology;
