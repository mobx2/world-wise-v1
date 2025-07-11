<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
import { useState } from "react";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import HomePage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
<<<<<<< HEAD
import City from "./components/City";
import Form from "./components/Form";

const BASE_URL = "http://localhost:9001";
=======

const BASE_URL = "http://localhost:9000";
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useState(() => {
    async function fetchCities() {
      try {
        setIsloading(true);
        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();

        setCities(data);
      } catch (error) {
        alert("there was an error loading data...");
      } finally {
        setIsloading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
<<<<<<< HEAD
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />

=======
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
<<<<<<< HEAD

          <Route path="cities/:id" element={<City />} />
=======
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
<<<<<<< HEAD
          <Route path="form" element={<Form />} />
=======
          <Route path="form" element={<p>Form</p>} />
>>>>>>> 31acf183a8820bd1df9d80b305342f0443e888a9
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
