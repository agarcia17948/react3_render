
import movies from "../movies.json"
import {MovieCard} from './MovieCard'
import styles from './Grid.module.css'

export function Grid () {
  
  return(
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
        
      ))}
    </ul>
  );
}

/*
el map siempre necesita un key
para mantener un estandar
*/