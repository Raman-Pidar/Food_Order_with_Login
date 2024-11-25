import { useContext } from "react";
import { contextVar } from "./database";
import { Restaurant } from "./restaurantView";
import { RestaurantPage } from "./restaurantPage";
import { Routes, Route } from "react-router-dom";

import "./styles.css";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Pages/Auth/PrivateRoute";
import PublicRoute from "./Pages/Auth/PublicRoute";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Restaurant />} />
        <Route
          path="/restaurant/:restaurantId"
          element={
            <PrivateRoute>
              <RestaurantPage />
            </PrivateRoute>
          }
        />
      </Routes>
      {/* {path === "home" && <Restaurant />}
      {path === "restaurant" && <RestaurantPage />} */}
    </div>
  );
}
