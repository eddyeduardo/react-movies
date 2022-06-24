import movie from "../data/movie.json";
import styles from "./MovieDetaill.module.css";

export function MovieDetaill() {
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <>
      <div className={styles.detailContainer}>
        <img className={styles.col +" "+styles.movieImage} src={imageUrl} alt={movie.title} />
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
