import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import TeamsPage from "./components/dashboard/teams/TeamsPage";
import AddTeams from "./components/dashboard/teams/AddTeams";
import EditTeam from "./components/dashboard/teams/EditTeam";
import Nav from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Nav />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/dashboard" exact>
              <DashboardPage />
            </Route>
            <Route path="/dashboard/teams" exact>
              <TeamsPage />
            </Route>
            <Route path="/dashboard/teams/add" exact>
              <AddTeams />
            </Route>
            <Route path="/dashboard/team/edit/:id">
              <EditTeam />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
