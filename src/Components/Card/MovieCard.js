import classes from "./MovieCard.module.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import { useEffect, useState } from "react";
import {AiTwotoneStar} from "react-icons/ai" 

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className={classes.card}>
          <SkeletonTheme>
            <Skeleton baseColor="#202020" style={{left:"-20px" }} height={300} highlightColor={"#333"} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white", font: "inherit" }}
        >
          <div className={classes.card}>
            <img
              className={classes.card_img}
              // Poster and background image is bad.
              src={` https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt="movieImage"
            />
            <div className={classes.card_overlay}>
              <div className={classes.card_title}>{movie.original_title}</div>
              <div className={classes.card_runtime}>
                {movie.release_date}
                
                <div className={classes.card_rating}>
                <AiTwotoneStar />
                  {movie.vote_average}
                </div>
              </div>
              <div className={classes.description}>
                {movie.overview.slice(0, 118) + "..."}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default MovieCard;
