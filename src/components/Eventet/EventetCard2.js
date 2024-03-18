import React from "react";
import styles from "../Eventet/EventetCard2.module.css";

const EventetCard2 = ({ imageSrc, title, linkTo, eventId }) => {
  return (
    // <div id="eventet-sot-element">
    <div id={styles.card2Element}>
      <a
        draggable="false"
        href={`eventet/event-details/${eventId}`}
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

        <div
          style={{
            fontFamily: "Memphis Extra Bold",
            fontSize: "20px",
            color: "#033E3C",
            textAlign: "center",
            paddingTop: "10px",
            textWrap: "wrap",
            textTransform: "uppercase",
            // backgroundColor: "red",
            height: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {title}
        </div>
      </a>
    </div>
  );
};

export default EventetCard2;
