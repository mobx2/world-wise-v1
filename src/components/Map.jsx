<<<<<<< HEAD
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();

  const [searchPrams, setSearchPrams] = useSearchParams();

  const lat = searchPrams.get("lat");

  const lng = searchPrams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position: {lat}, {lng}
      </h1>
      <button onClick={() => setSearchPrams({ lat: 23, lng: 50 })}>
        Change Potiosion
      </button>
    </div>
  );
=======
import styles from "./Map.module.css";

function Map() {
  return <div className={styles.mapContainer}>Map</div>;
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
}

export default Map;
