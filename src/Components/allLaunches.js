import React, { Components, useState, useEffect } from "react";
import "./allLaunches.css";
import { connect } from "react-redux";

//import { useSelector, useDispatch } from "react-redux";
import { getRockets, getRocketsByDate } from "../Redux/actions";
import Card from "./Card";

class AllLaunches extends React.Component {
  constructor(props) {
    super(props);
    //***** */
    // const rockets = useSelector((state) => state.rocket.data);

    this.state = {
      startDate: null,
      endDate: null,
    };
  }
  componentDidMount() {
    this.props.getRockets();
    console.log(this.props);
    //**** */

    // console.log(rockets);
  }

  sendDate = () => {
    ////******** */
    this.props.getRocketsByDate(this.state.startDate, this.state.endDate);
    console.log(this.state.startDate);
    console.log(this.state.endDate);
  };
  refresh = () => {
    ///***** */
    this.props.getRockets();
  };

  render() {
    return (
      <div className="allLaunches">
        <span className="heading">All Launches till date: </span>
        <form>
          <input
            type="date"
            className="startDate"
            onChange={(e) =>
              this.setState({
                startDate: e.target.value,
              })
            }
          />
          <input
            type="date"
            className="endDate"
            onChange={(e) =>
              this.setState({
                endDate: e.target.value,
              })
            }
          />
          <i
            className="fa fa-search"
            aria-hidden="true"
            type="submit"
            style={{ marginLeft: "20px" }}
            onClick={this.sendDate}
          ></i>
          <i
            className="fas fa-sync-alt"
            style={{ marginLeft: "20px" }}
            onClick={this.refresh}
          ></i>
        </form>

        <div className="cards">
          {this.props.rockets.map((launch, i) => {
            return (
              <Card
                key={i}
                id={i}
                info={launch}
                rocketName={launch.rocket.rocket_name}
                launchYear={launch.launch_year}
                missionName={launch.mission_name}
                imgSrc={launch.links.flickr_images[0]}
                rockets={this.props.rockets}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rockets: state.rocket.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getRockets: () => dispatch(getRockets()),

    getRocketsByDate: (startDate, endDate) =>
      dispatch(getRocketsByDate(startDate, endDate)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllLaunches);
