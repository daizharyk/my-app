import { useState } from "react";
import data from "../data/data.json";

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState(data.destinations[0]);

  return (
    <div className={styles.destination}>
      {/* Левая сторона - изображение планеты */}
      <div className={styles.imageContainer}>
        <img src={activePlanet.images.png} alt={activePlanet.name} />
      </div>

      {/* Правая сторона - контент */}
      <div className={styles.content}>
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
          <div>
            <h2>Distance</h2>
            <p>{activePlanet.distance}</p>
          </div>
          <div>
            <h2>Travel Time</h2>
            <p>{activePlanet.travel}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
