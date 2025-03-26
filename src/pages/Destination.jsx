import { useState } from "react";
import data from "../data/data.json";
import styles from "../assets/styles/Destination.module.css";
const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(data.destinations[0]);

  return (
     
    <section className={styles.destination}>
      {/* Левая сторона - изображение планеты */}
      <article className={styles.imageContainer}>
        <img src={activePlanet.images.png} alt={activePlanet.name} />
      </article>

      {/* Правая сторона - контент */}
      <article className={styles.content}>
        {/* Список планет */}
        <ul className={styles.planetList}>
          {data.destinations.map((planet) => (
            <li
              key={planet.name}
              className={activePlanet.name === planet.name ? styles.active : ""}
              onClick={() => setActivePlanet(planet)}
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
