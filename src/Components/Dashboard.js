import React from "react";
import Navbar from "./Navbar";
import AllLaunches from "./allLaunches";
import PastLaunches from "./pastLaunches";
import UpcomingLaunches from "./upcomingLaunches";
import { Switch, Route, Link } from "react-router-dom";
import bg from "./Assets/bg.mp4";
function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <Switch>
        <Route exact path="/upcoming">
          <UpcomingLaunches />
        </Route>
        <Route exact path="/">
          <AllLaunches />
        </Route>
        <Route exact path="/past">
          <PastLaunches />
        </Route>
      </Switch>
    </div>
  );
}

export default Dashboard;
