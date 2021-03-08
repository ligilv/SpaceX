import React, { useEffect } from "react";
import "./allLaunches.css";
import { useSelector, useDispatch } from "react-redux";
import { getUpcomingRockets } from "../Redux/actions";
import Card from "./Card";
function UpcomingLaunches() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.data);
  console.log(rockets);
  useEffect(() => {
    dispatch(getUpcomingRockets());
    console.log(rockets);
  }, []);
  return (
    <div className="allLaunches">
      <span className="heading">Upcoming launches: </span>
      <div className="cards">
        {rockets.map((launch, i) => {
          return (
            <Card
              key={i}
              id={i}
              rocketName={launch.rocket.rocket_name}
              launchYear={launch.launch_year}
              missionName={launch.mission_name}
              imgSrc={launch.links.flickr_images[0]}
              rockets={rockets}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingLaunches;
