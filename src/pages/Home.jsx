import { Link } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";

const Home = () => {
  return (

      <div className={styles.content}>
        <section className={styles.hero}>
          <h3 className={styles.subtitle}>So, you want to travel to</h3>
          <h1 className={styles.title}>Space</h1>
          <p className={styles.text}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well, sit back, and relax because we’ll give you a truly
            out-of-this-world experience!
          </p>
        </section>
        <section className={styles.explore}>
          <Link to="/destination" className={styles.exploreBtn}>
            Explore
          </Link>
        </section>
      </div>

  );
};

export default Home;
