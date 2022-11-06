import classes from "./MoviesList.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieCard from "../Card/MovieCard";

const MoviesList = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const { type } = useParams();
  const apiKey = "4e44d9029b1270a757cddc766a1bcb63";

  // To call the api before the type changes , like it will be faster , not much but will be.
  useEffect(() => {
    getType();
  }, []);

  // This useEffect will run when the movieType changes ie like from popular to upcoming , etc etc.
  useEffect(() => {
    getType();
  }, [type]);

  const getType = () => {
    // Setting the default type popular to make it load when use on home page below slider.
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=${apiKey}&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => setListOfMovies(data.results));
  };
  
  return (
    <>
      <div className={classes.movie__list}>
        <h2 className={classes.list__title}>
          {/* Used to replace top rated column underscore with a space */}
          {(type ? type.replace('_',' ') : "POPULAR").toUpperCase()}
        </h2>
        <div className={classes.list__cards}>
          {listOfMovies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MoviesList;
