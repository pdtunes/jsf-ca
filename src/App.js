import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import TeamsPage from "./components/dashboard/teams/TeamsPage";
import DetailsPage from "./components/dashboard/teams/DetailsPage";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import Admin from "./components/dashboard/Admin";
import TrackList from "./components/dashboard/tracks/TrackList";
import TrackDetails from "./components/dashboard/tracks/TrackDetails";
import About from "./components/about/About";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="background">
          <Nav />

          <div className="container">
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/tracks" exact>
                <TrackList />
              </Route>
              <Route path="/tracks/details/:id">
                <TrackDetails />
              </Route>
              <Route path="/dashboard/teams" exact>
                <TeamsPage />
              </Route>
              <Route path="/teams/details/:id">
                <DetailsPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

console.log(process.env.NODE_ENV);

export default App;
