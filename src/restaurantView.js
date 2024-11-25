import { useContext } from "react";
import { contextVar } from "./database";
import { Link } from "react-router-dom";

const RestaurantTile = (rest) => {
  return (
    <Link to={`/restaurant/${rest.id}`}>
      <h2 style={{ textAlign: "left" }}>Dishes by {rest.name}</h2>
      <div className="restarauntTile">
        {rest.menu.map((item) => {
          return (
            <div className="card">
              <img className="cardImage" src={item.imgSrc} alt="product" />
              <br />
              <p>
                <b>{item.name}</b>
                <br />
                <span className="subtext">
                  {item.price} for {item.qty}
                  <br />
                </span>
                <span className="subtext">{rest.name}</span>
              </p>
            </div>
          );
        })}
      </div>
    </Link>
  );
};

export const Restaurant = () => {
  const {
    data,
    couisineFilter,
    setCouisineFilter,
    cuisineData,
    active,
    setActive,
  } = useContext(contextVar);
  const filterData = data.filter(
    (item) => item.cuisine_id === parseInt(couisineFilter)
  );
  console.log("active id is ", active);
  return (
    <>
      <div>
        <h1>Food Ordering App</h1>
        <br />
        <h2>Select Your Cousine:</h2>
        <nav>
          {cuisineData.map((item) => {
            return (
              <button
                onClick={(item) => {
                  setCouisineFilter(item.target.id);
                  setActive(item.target.id);
                }}
                id={item.id}
                className="mainButton"
              >
                {item.name}
              </button>
            );
          })}
        </nav>
        <br />
        {filterData.map((item) => {
          return RestaurantTile(item);
        })}
      </div>
    </>
  );
};
