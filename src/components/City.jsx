<<<<<<< HEAD
import { useParams, useSearchParams } from "react-router-dom";
=======
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
import styles from "./City.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
<<<<<<< HEAD
  const { id } = useParams();

  const [searchPrams, setSearchPrams] = useSearchParams();

  const lat = searchPrams.get("lat");

  const lng = searchPrams.get("lng");

=======
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
  // TEMP DATA
  const currentCity = {
    cityName: "Lisbon",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
  };

  const { cityName, emoji, date, notes } = currentCity;

  return (
<<<<<<< HEAD
    <>
      <h1>City {id}</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </>
  );

  // return (
  //   <div className={styles.city}>
  //     <div className={styles.row}>
  //       <h6>City name</h6>
  //       <h3>
  //         <span>{emoji}</span> {cityName}
  //       </h3>
  //     </div>

  //     <div className={styles.row}>
  //       <h6>You went to {cityName} on</h6>
  //       <p>{formatDate(date || null)}</p>
  //     </div>

  //     {notes && (
  //       <div className={styles.row}>
  //         <h6>Your notes</h6>
  //         <p>{notes}</p>
  //       </div>
  //     )}

  //     <div className={styles.row}>
  //       <h6>Learn more</h6>
  //       <a
  //         href={`https://en.wikipedia.org/wiki/${cityName}`}
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         Check out {cityName} on Wikipedia &rarr;
  //       </a>
  //     </div>

  //     <div></div>
  //   </div>
  // );
=======
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <ButtonBack />
      </div>
    </div>
  );
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
}

export default City;
