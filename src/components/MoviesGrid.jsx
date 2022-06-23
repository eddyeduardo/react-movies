import movies from '../data/movies.json'
import { MovieCard } from './MovieCard'
import styles from "./MoviesGrid.module.css"

export default function MoviesGrid(){
    console.log(movies)
    return(
        <>
            <ul className={styles.moviesGrid}>
                {movies.map( function(movie) {
                    return <MovieCard key={movie.id} movie={movie} />
                } 
                )}

            </ul>
        </>
    )

}