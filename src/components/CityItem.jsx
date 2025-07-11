<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
<<<<<<< HEAD
  const { cityName, emoji, date, id, position } = city;

  console.log(position);

  return (
    <li>
      <Link
        className={styles.cityItem}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>({formatDate(date)})</time>

        <button className={styles.deleteBtn}>&times;</button>
      </Link>
=======
  const { cityName, emoji, date } = city;

  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>{emoji}</span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>

      <button className={styles.deleteBtn}>&times;</button>
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
    </li>
  );
}

export default CityItem;
