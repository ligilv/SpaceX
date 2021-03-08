import React, { useState } from "react";
import "./Card.css";

import ReactModal from "react-modal";
function Card({
  details,
  launchSite,
  rocketName,
  launchYear,
  imgSrc,
  missionName,
  id,
  rockets,
}) {
  const [modal, setModal] = useState(false);
  const onInfo = (e) => {
    setModal(true);
  };
  const onClose = () => {
    setModal(false);
  };
  return (
    <div>
      <div className="cardWrapper">
        <div className="rocketImg">
          <img
            src={
              imgSrc
                ? imgSrc
                : "https://media.giphy.com/media/3oKIPtjElfqwMOTbH2/giphy.gif"
            }
            alt="this is an image"
            width="100%"
            height="200px"
          ></img>
        </div>
        <div className="rocketName">{id + 1}</div>
        <div className="rocketName">{rocketName}</div>
        <div className="rocketName">{launchYear}</div>
        <div className="rocketName">{missionName}</div>
        <div className="rocketName">
          <i
            className="fas fa-info-circle"
            onClick={onInfo}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
      <ReactModal
        isOpen={modal}
        onRequestClose={onClose}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
          },
          content: {
            height: "400px",
            width: "400px",
            position: "absolute",
            top: "25vh",
            left: "10%",
            color: "white",
            border: "2px solid white",
            background: "black",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "10px",
            outline: "none",
            padding: "20px",
            margin: "0 auto",
          },
        }}
      >
        <i
          class="fas fa-times-circle"
          onClick={onClose}
          style={{ cursor: "pointer" }}
        ></i>
        <br />
        <span className="modalHeading">Mission Name</span>: {missionName}
        <br />
        <span className="modalHeading"> LaunchYear</span>: {launchYear}
        <br />
        <span className="modalHeading">Details</span> :{rockets[id].details}
        <br></br>
        <span className="modalHeading">Launch Date</span> :
        {rockets[id].launch_date_local}
        <br />
        <span className="modalHeading">Launch Site</span> :
        {rockets[id].launch_site.site_name}
        <br />
        Useful Likns:
        <br />
        <span className="modalHeading"> Article </span>:
        <a href={rockets[id].links.article_link}>
          {rockets[id].links.article_link}
        </a>
      </ReactModal>
    </div>
  );
}

export default Card;
