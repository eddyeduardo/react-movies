import styles from "./MovieDetaill.module.css";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { get } from "./httpClient";
import { Spinner } from "./Spinner";
import placeholder from "../placeholder.jpg";

export function MovieDetaill() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if(isLoading){
    return (<Spinner/>);
  }

  if (!movie) {
    return null;
  }

  const imageUrl = movie.poster_path ? "https://image.tmdb.org/t/p/w500" + movie.poster_path : placeholder;
  return (
    <>
      <div className={styles.detailContainer}>
        <img
          className={styles.col + " " + styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${styles.col} {styles.movieDetails}`}>
          <p className={styles.firstItem}>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>Genre:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
        </div>
      </div>
    </>
  );
}
