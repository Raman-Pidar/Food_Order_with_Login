import { useContext } from "react";
import { contextVar } from "./database";
import { Link, useParams } from "react-router-dom";
import AddReview from "./addReview";

export function RestaurantPage() {
  //filtering the Restaurants
  const { restaurantId } = useParams();
  const { data, toggleModal, modal } = useContext(contextVar);
  console.log("error", data);
  const restaurant = data.find((item) => item.id === parseInt(restaurantId));

  return (
    <div>
      <Link to="/" className="mainButton , floatingButtonL">
        Home
      </Link>
      {modal && <AddReview />}
      <div className="restContainer">
        <button className="mainButton , floatingButtonR" onClick={toggleModal}>
          Add Review
        </button>

        <span className="restTitle">{restaurant.name}</span>
        <p className="subtext">
          {restaurant.address}
          <br />
          Average Rating: {restaurant.averageRating}
          <br />
        </p>
        <hr />
        <h2>Reviews</h2>
        {restaurant.ratings.map((rating) => {
          return (
            <div className="reviewContainer">
              <span className="profileName">
                <img className="profileImg" src={rating.pp} alt="pp" />{" "}
                <b>{rating.revName}</b>
              </span>
              <br />
              {rating.comment}
              <span className="rating">{rating.rating} &#9734;</span>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
