import { useEffect, useState } from "react";

import styles from "../assets/styles/Destination.module.css";
const Destination = ({ data }) => {
  const [activePlanet, setActivePlanet] = useState(data.destinations[0]);

  const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
      setTimeout(() => {
        setIsAnimating(true);
      }, 100);
    }, []);

  const handlePlanetChange = (planet) => {
    if (planet.name === activePlanet.name) return;

    setIsAnimating(false);

    setTimeout(() => {
      setActivePlanet(planet);
      setIsAnimating(true);
    }, 300);
  };

  return (
    <section className={styles.destination}>
      {/* Левая сторона - изображение планеты */}
      <article className={styles.imageContainer}>
        <img
          src={activePlanet.images.png}
          className={isAnimating ? styles.active : ""}
          alt={activePlanet.name}
        />
      </article>

      {/* Правая сторона - контент */}
      <article
        className={`${styles.content} ${isAnimating ? styles.active : ""}`}
      >
        {/* Список планет */}
        <ul className={styles.planetList}>
          {data.destinations.map((planet) => (
            <li
              key={planet.name}
              className={activePlanet.name === planet.name ? styles.active : ""}
              onClick={() => handlePlanetChange(planet)}
            >
              {planet.name}
            </li>
          ))}
        </ul>

        {/* Название планеты */}
        <h1 className={styles.title}>{activePlanet.name}</h1>

        {/* Описание */}
        <p className={styles.description}>{activePlanet.description}</p>

        {/* Дистанция и время путешествия */}
        <div className={styles.infoContainer}>
          <div className={styles.infoWrapper}>
            <p className={styles.infoTitle}>AVG. DISTANCE</p>
            <p className={styles.infoData}>{activePlanet.distance}</p>
          </div>
          <div className={styles.infoWrapper}>
            <p className={styles.infoTitle}>Est. travel time</p>
            <p className={styles.infoData}>{activePlanet.travel}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Destination;
