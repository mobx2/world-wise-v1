import Spinner from "./Spinner";
import Message from "./Message";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map " />
    );

  const countires = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countires.map((country) => (
<<<<<<< HEAD
        <CountryItem country={country} key={country.country} />
=======
        <CountryItem country={country} key={country.id} />
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
      ))}
    </ul>
  );
}

export default CountryList;
