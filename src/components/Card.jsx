import React from "react";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="note">
      <img src={props.image} alt="movie.png"></img>
      <h1>{props.title}</h1>
      <p>{props.year}</p>
      <button
        onClick={() => {
          props.func(props.title);
        }}
      >
        <Link to="/movie">
          <strong>View Details</strong>
        </Link>
      </button>
    </div>
  );
}
export default Card;
