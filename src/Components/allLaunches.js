import React, { useState, useEffect } from "react";
import "./allLaunches.css";
import { useSelector, useDispatch } from "react-redux";
import { getRockets, getRocketsByDate } from "../Redux/actions";
import Card from "./Card";

function AllLaunches() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocket.data);

  useEffect(() => {
    dispatch(getRockets());
    console.log(rockets);
  }, []);
  const sendDate = () => {
    dispatch(getRocketsByDate(startDate, endDate));
  };
  const refresh = () => {
    dispatch(getRockets());
  };
  return (
    <div className="allLaunches">
      <span className="heading">All Launches till date: </span>
      <form>
        <input
          type="date"
          className="startDate"
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          className="endDate"
          onChange={(e) => setEndDate(e.target.value)}
        />
        <i
          class="fa fa-search"
          aria-hidden="true"
          type="submit"
          style={{ marginLeft: "20px" }}
          onClick={sendDate}
        ></i>
        <i
          class="fas fa-sync-alt"
          style={{ marginLeft: "20px" }}
          onClick={refresh}
        ></i>
      </form>

      <div className="cards">
        {rockets.map((launch, i) => {
          return (
            <Card
              key={i}
              id={i}
              info={launch}
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

export default AllLaunches;
