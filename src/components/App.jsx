import styles from "./App.module.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { LandingPage } from "../routes/LandingPage";
import { MovieDetaill } from "./MovieDetaill";
import { NoEncontrada} from "../routes/NoEncontrada"
import { Search } from "./Search";

export function App() {
  return (
    <>
      <Router>
        <header className={styles.title}>
          <Link to="/">
            <h1 className={styles.title}>Movies</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/movies/:movieId">
              <MovieDetaill />
            </Route>
            <Route>
              <NoEncontrada/>
            </Route>
          </Switch>
        </main>
      </Router>
    </>
  );
}
