import { useContext, useState } from "react";
import { contextVar } from "./database";
import { useParams } from "react-router-dom";

export default function AddReview() {
  const [rating, setRating] = useState("1");
  const [comment, setComment] = useState("");
  const { restaurantId } = useParams();

  const { data, setData, toggleModal } = useContext(contextVar);

  const addReview = () => {
    const newReview = {
      rating,
      comment,
      revName: "Raman",
      pp:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0"
    };
    console.log(restaurantId, newReview);
    const tempData = data.filter((item) => item.id !== parseInt(restaurantId));
    const tempRestaurent = data.find(
      (item) => item.id === parseInt(restaurantId)
    );
    tempRestaurent.ratings.push(newReview);
    setData([...tempData, tempRestaurent]);
    return toggleModal();
  };

  return (
    <div className="modal">
      <h2> Add your review</h2>
      <hr />
      <label>Rating </label>
      <select onChange={(e) => setRating(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <br />
      <br />
      <label>
        {" "}
        Comments{" "}
        <input onChange={(e) => setComment(e.target.value)} type="text" />
      </label>
      <br />
      <br />
      <button className="secButton" onClick={addReview}>
        {" "}
        Submit
      </button>
      <button className="floatingButtonL" onClick={toggleModal}>
        {" "}
        X
      </button>
    </div>
  );
}
