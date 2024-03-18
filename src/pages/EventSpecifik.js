import React, { useEffect, useState } from "react";
import styles from "./EventSpecifik.module.css";
import Header from "../components/Header";
import g0 from "../assets/img/g0.jpg";
import locationSvg from "../assets/img/location.svg";
import locationSvg2 from "../assets/img/location2.svg";
import timeSvg from "../assets/img/time.svg";
import timeSvg2 from "../assets/img/time2.svg";
import SlickSlider from "../components/SliderComponents/SlickSlider";
import arrowDown from "../assets/img/arrow-down.svg";
import instagramIcon from "../assets/img/SocialMediaIcons/instagram.svg";
import twitterIcon from "../assets/img/SocialMediaIcons/twitter.svg";
import facebookIcon from "../assets/img/SocialMediaIcons/facebook.svg";
import whatsuppIcon from "../assets/img/SocialMediaIcons/whatsup.svg";
import messengeIcon from "../assets/img/SocialMediaIcons/messenger.svg";
import socialIcon1 from "../assets/img/SocialMediaIcons/Group 911.svg";
import socialIcon2 from "../assets/img/SocialMediaIcons/Group 912.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  convertDateToNormal,
  formatTime,
  convertDateToAlbanian,
} from "../hooks/utilities";

const EventSpecifik = ({ event }) => {
  const [eventDetails, setEventDetails] = useState();
  const [eventCategoryDetails, setEventCategoryDetails] = useState([]);
  const location = useLocation();
  const eventId = location.pathname.split("/")[3];

  useEffect(() => {
    const getDatas = async () => {
      try {
        const response = await axios.get(
          `https://cms.garanciarinore.al/wp-json/wpem/events/${eventId}`
        );

        const eventCategory = await axios.get(
          `https://cms.garanciarinore.al/wp-json/wpem/events?category=${response?.data.event_categories[0].term_id}`
        );

        const filteredEventCategory = eventCategory?.data.filter(
          (item) => item.id !== Number(eventId)
        );

        setEventDetails(response.data);
        setEventCategoryDetails(filteredEventCategory);
        console.log("This is filteredEventCategory:", filteredEventCategory);
        console.log("This is eventCategoryDetails:", eventCategoryDetails);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getDatas();
  }, [eventId]);

  return (
    <div id={styles.eventSpecifikContainer}>
      <Header></Header>

      <div id={styles.eventSpecifikDetailsSection}>
        <div
          id={styles.firstWrapper}
          style={{
            height: "100%",
            width: "100%",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          <div id={styles.firstSectionDiv1}>
            <div id={styles.imageContainer}>
              <img
                src={eventDetails?.images}
                alt="event-img"
                width={"100%"}
                height={"100%"}
              ></img>
            </div>
          </div>

          <div id={styles.firstSectionDiv2}>
            <div id={styles.eventSpecifikTitle}>{eventDetails?.name}</div>

            <div id={styles.eventSpecifikLocationDataTimeContainer}>
              <div id={styles.eventSpecifikLocation}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "15px",
                    height: "15px",
                    // backgroundColor: "black",
                  }}
                >
                  <img
                    src={locationSvg}
                    alt="location-icon"
                    width={"100%"}
                    height={"100%"}
                  ></img>
                </div>

                <div style={{ fontFamily: "Memphis Normal", fontSize: "14px" }}>
                  {eventDetails?.meta_data._event_location}
                </div>
              </div>
              <div id={styles.eventSpecifikData}>
                {convertDateToNormal(eventDetails?.meta_data._event_start_date)}
              </div>
              <div id={styles.eventSpecifikTime}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "15px",
                    height: "15px",
                  }}
                >
                  <img src={timeSvg} alt="time-icon"></img>
                </div>
                <div>
                  {formatTime(eventDetails?.meta_data._event_start_time)}
                </div>
              </div>
            </div>

            <div id={styles.socialMediaIcons}>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={socialIcon1}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={socialIcon2}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={instagramIcon}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={twitterIcon}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={whatsuppIcon}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={messengeIcon}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
              <a href="#" id={styles.socialMediaIconContainer}>
                <img
                  src={facebookIcon}
                  alt="social-media-icons"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.eventDescriptionContainer}>
        <img
          src={arrowDown}
          alt="arrow-down-img"
          id={styles.arrowDownImg}
        ></img>

        <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
          <div id={styles.eventDescriptionTitle}>DETAJET E EVENTIT</div>

          <div
            id={styles.eventDescription}
            dangerouslySetInnerHTML={{ __html: eventDetails?.description }}
          >
            {/* {paragraphs.map((paragraph, index) => {
              return (
                <div key={index}>
                  <div>{paragraph}</div>
                  <br></br>
                </div>
              );
            })} */}
          </div>

          <div id={styles.eventSpecifikDetailsSection2}>
            <div id={styles.ditaOraVendi}>DITA / ORA / VENDI</div>
            <div id={styles.eventSpecifikDetailsSection2Location}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "17px",
                  height: "17px",
                }}
              >
                <img
                  src={locationSvg2}
                  alt="location-icon"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </div>
              <div>{eventDetails?.meta_data._event_location}</div>
            </div>
            <div id={styles.eventSpecifikDetailsSection2DataOra}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "17px",
                  height: "17px",
                }}
              >
                <img
                  src={timeSvg2}
                  alt="time-icon"
                  width={"100%"}
                  height={"100%"}
                ></img>
              </div>{" "}
              <div>
                {convertDateToAlbanian(
                  eventDetails?.meta_data._event_start_date
                )}
                ,{" "}
                {formatTime(eventDetails?.meta_data._event_start_time) +
                  " - " +
                  formatTime(eventDetails?.meta_data._event_end_time)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.organizatoriContainer}>
        <div style={{ width: "100%", maxWidth: "1200px", margin: "auto" }}>
          <div id={styles.organizatoriLabel}>ORGANIZATORI</div>
          <div id={styles.organizatoriText}>
            {eventDetails?.meta_data._organizer}
          </div>
          <div id={styles.organizatoriDescription}>
            {eventDetails?.meta_data._organizer_description}
          </div>
        </div>
      </div>

      {eventCategoryDetails.length > 0 && (
        <div id={styles.eventSpecifikSliderContent}>
          <div id={styles.eventSpecifikSliderTitle}>EVENTE TË NGJASHME</div>

          <div id={styles.kategoriSpecifikeContainer}>
            <SlickSlider
              cardType={"short"}
              events={eventCategoryDetails}
            ></SlickSlider>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventSpecifik;
