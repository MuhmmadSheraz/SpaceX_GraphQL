import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AllMissionList from "../components/AllMissionList";
import MissionDetails from "../components/MissionDetails";
import UpcomingMissions from "../components/UpcomingMissions";

export default function RouterMain() {
  return (
    <Router>
      <AllMissionList />
      <Switch>
        <Route exact path="/MissionDetails/:slug">
          <MissionDetails />
        </Route>
        <Route exact path="/">
          <UpcomingMissions />
        </Route>
      </Switch>
    </Router>
  );
}
