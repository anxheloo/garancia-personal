import React from "react";
import styles from "./EventetCard3.module.css";

const EventetCard3 = ({ imageSrc, title, linkTo, eventId }) => {
  return (
    <div id={styles.card3element}>
      <a
        draggable="false"
        href={`/eventet/event-details/${eventId}`}
        style={{ textDecoration: "none", width: "100%", height: "100%" }}
      >
        <div
          style={{
            width: "100%",
            height: "70%",
            borderRadius: "20px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            src={imageSrc}
            alt="card"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          ></img>
        </div>

        <div id={styles.card3Title}>{title}</div>
      </a>
    </div>
  );
};

export default EventetCard3;
