import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Movie = props => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    // const id = 8;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  // Uncomment this only when you have moved on to the stretch goals
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie);
  };

  if (!movie) {
    return <div>Loading movie information...</div>;
  } else {
    const { title, director, metascore, stars } = movie;

    console.log(movie);

    return (
      <div className="save-wrapper">
        <MovieCard isDetailed={true} movie={movie} />
        <div className="save-button" onClick={e => props.addToSavedList(movie)}>
          Save
        </div>
      </div>
    );
  }
};

export default Movie;
