import MoviesGrid from './MoviesGrid'
import styles from "./App.module.css"

export function App() {
  return (
    <>
      <header className={styles.title}>
        <h1>Movies</h1>
      </header>
      <main>
          <MoviesGrid></MoviesGrid>
      </main>
    </>
  );
}
