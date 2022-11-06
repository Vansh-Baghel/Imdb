import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import MoviesList from "../List_Of_Cards/MoviesList";
import {AiTwotoneStar} from "react-icons/ai"

const Home = () => {
    const apiKey = "4e44d9029b1270a757cddc766a1bcb63";
    const [homeMovies, setHomeMovies] = useState([]);

    useEffect(() => {
      try{
      const getMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated/?api_key=${apiKey}&language=en-US`
        );
        const data = await response.json();
        setHomeMovies(data.results);
      };

      getMovies();
    }
  catch{
    alert("Fetch problem");
  }
  }
  , []);

  return (
    <>
      <div className={[classes.slider].join(" ")}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          useKeyboardArrows={true}
        >
          {homeMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className={classes.movieImage}>
                <img
                  src={` https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt="movieImage"
                />
              </div>
              <div className={classes.movie_blackBlur}>
                <div className={classes.movie_title}>
                  {movie.original_title}
                </div>
                <div className={classes.movie_runtime}>
                  {movie.release_date}
                <span className={classes.movie_rating}><AiTwotoneStar />{movie.vote_average}</span>
                </div>
                  <div className={classes.description}>{movie.overview}</div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MoviesList />
      </div>
    </>
  );
};

export default Home;
