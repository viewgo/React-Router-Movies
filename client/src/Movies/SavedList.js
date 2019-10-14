import React from "react";
import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <div className="pad">
      <h3>Saved Movies:</h3>
      <div className="saved-movies-list">
        {props.list.map(movie => (
          <NavLink exact to={`/movies/${movie.id}`}>
            <div className="saved-movie">
              <span>{movie.title}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <NavLink to="/">
        <div className="home-button">Home</div>
      </NavLink>
    </div>
  </div>
);

export default SavedList;
