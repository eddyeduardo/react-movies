import MoviesGrid from "./MoviesGrid";
import styles from "./App.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { LandingPage } from "../routes/LandingPage";
import { MovieDetaill } from "./MovieDetaill";

export function App() {
  return (
    <>
      <Router>
        <header className={styles.title}>
          <h1>- Movies -</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">* Movies *</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
              {/*<MoviesGrid/>*/}
            </Route>
            <Route exact path="/movies">
              <MovieDetaill />
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}
