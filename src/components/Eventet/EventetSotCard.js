import React, { useState } from "react";
import location2Svg from "../../assets/img/location2.svg";
import time2Svg from "../../assets/img/time2.svg";
import styles from "../../pages/evente.module.css";
import { Link } from "react-router-dom";
import { convertDateToAlbanian, formatTime } from "../../hooks/utilities";

const EventetSotCard = ({
  imageSrc,
  title,
  description,
  location,
  date,
  startTime,
  endTime,
  category,
  eventId,
}) => {
  return (
    <div id={styles.eventetSotElement}>
      <a
        draggable="false"
        href={`eventet/event-details/${eventId}`}
        style={{
          textDecoration: "none",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "55%",
            // height: "40%",
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

          <div
            style={{
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              height: "40px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(30px)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontFamily: "Memphis Bold",
              fontSize: "18px",
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "45%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "20px",
            gap: "20px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "Memphis Extra Bold",
                fontSize: "20px",
                color: "#033E3C",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap", // Prevent wrapping to new line
                textTransform: "uppercase",
              }}
            >
              {title}
            </div>
            <div
              id={styles.eventetSotCardDescription}
              dangerouslySetInnerHTML={{ __html: description }}
              style={{
                fontSize: "12px",
                maxHeight: "6em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                // wordWrap: "break-word",
                // lineClamp: 3,
                WebkitBoxOrient: "vertical",
              }}
            ></div>
          </div>

          <div>
            <div
              style={{
                fontSize: "16px",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>
                <img src={location2Svg}></img>
              </span>
              <div style={{ fontFamily: "Memphis Normal", fontSize: "16px" }}>
                {location}
              </div>
            </div>
            <div
              style={{
                fontFamily: "Memphis Normal",
                fontSize: "16px",
                color: "black",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span>
                <img src={time2Svg}></img>
              </span>{" "}
              {convertDateToAlbanian(date)} ,{" "}
              {formatTime(startTime) + " - " + formatTime(endTime)}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventetSotCard;
