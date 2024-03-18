import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styles from "../pages/CategoriSpecifikeEventesh.module.css";
import Element from "../components/Eventet/Element";
import argetimDheSportIconRed from "../assets/img/NewIcons/Argetim dhe Sport red.svg";
import argetimDheSportIcon from "../assets/img/NewIcons/Argetim dhe Sport-white.svg";
import kinemaDheTeaterIcon from "../assets/img/NewIcons/Kinema dhe Teater-white.svg";
import kinemaDheTeaterIconRed from "../assets/img/NewIcons/Kinema dhe Teater red.svg";
import eventetEJaves from "../assets/img/eventet-e-javes.svg";
import arrowUp from "../assets/img/arrow-up.svg";
import redArgetimLogo from "../assets/img/black-argetim - Copy.svg";
import redEventetEJavesLogo from "../assets/img/black-eventet-e-javes - Copy.svg";
import panairDheEkspoziteIcon from "../assets/img/NewIcons/Panair dhe Ekspozite-white.svg";
import panairDheEkspoziteIconRed from "../assets/img/NewIcons/Panair dhe Ekspozite red.svg";
import EventetCard3 from "../components/Eventet/EventetCard3";
import axios from "axios";

const CategoriSpecifikeEventesh = ({ type, categoryId, text }) => {
  const [events, setEvents] = useState();

  useEffect(() => {
    const getDatas = async () => {
      let response;
      try {
        if (categoryId) {
          response = await axios.get(
            `https://cms.garanciarinore.al/wp-json/wpem/events?category=${categoryId}`
          );
          setEvents(response.data);
        } else {
          response = await axios.get(
            `https://cms.garanciarinore.al/wp-json/wpem/events`
          );

          const currentDate = new Date();

          const eventsOfTheMonth = response?.data?.filter((event) => {
            const eventStartDate = new Date(event.meta_data._event_start_date);
            return eventStartDate.getMonth() === currentDate.getMonth();
          });

          setEvents(eventsOfTheMonth);
        }

        console.log("This is response:", response);
      } catch (error) {
        console.log("Error:", error);
      }
    };

    getDatas();
  }, [categoryId]);

  let newType = type.replace(/-/g, " ");

  let logoSrc;

  switch (type) {
    case "argëtim-dhe-sport":
      logoSrc = argetimDheSportIconRed;
      break;
    case "kinema-dhe-teatër":
      logoSrc = kinemaDheTeaterIconRed;
      break;
    case "panair-dhe-ekspozitë":
      logoSrc = panairDheEkspoziteIconRed;
      break;
    case "eventet-e-javës":
      logoSrc = redEventetEJavesLogo;
      break;
    // case "kinema":
    //   logoSrc = redKinemaLogo;
    //   break;
    // case "teatër":
    //   logoSrc = redTeaterLogo;
    //   break;
    // case "ekspozitë":
    //   logoSrc = redEkspoziteLogo;
    //   break;
    // case "panair":
    //   logoSrc = redPanairLogo;
    //   break;
    // case "sport":
    //   logoSrc = redSportLogo;
    //   break;
    // case "jashtë-tiranës":
    //   logoSrc = redJashteTiranesLogo;
    //   break;
    default:
      logoSrc = redArgetimLogo;
  }

  return (
    <div>
      <Header></Header>

      <div id={styles.section1}>
        <img src={arrowUp} alt="arrow-up" id={styles.arrowup}></img>

        <div id={styles.section1title}>{newType}</div>
      </div>

      <div id={styles.categories}>
        <Element
          logoSrc={argetimDheSportIcon}
          linkToSrc={"/argetim-dhe-sport"}
          text={"Argëtim dhe sport"}
          textToDisplay={"Argëtim & sport"}
          currentType={type}
        ></Element>

        <Element
          logoSrc={kinemaDheTeaterIcon}
          linkToSrc={"/kinema-dhe-teater"}
          text={"KINEMA DHE TEATëR"}
          textToDisplay={"Kinema & teatër"}
          currentType={type}
        ></Element>

        <Element
          logoSrc={panairDheEkspoziteIcon}
          linkToSrc={"/panair-dhe-ekspozite"}
          text={"PANAIR DHE EKSPOZITë"}
          textToDisplay={"Panair & ekspozitë"}
          currentType={type}
        ></Element>

        <Element
          logoSrc={eventetEJaves}
          linkToSrc={"/eventet-e-muajit"}
          text={"Eventet e muajit"}
          textToDisplay={"Eventet e muajit"}
          currentType={type}
        ></Element>
      </div>

      <div id={styles.cardGridSection}>
        <div id={styles.cardGridSectionSection1}>
          <img src={logoSrc} alt="panair-logo" id={styles.redPanairLogo}></img>
          <div id={styles.section2Title}>{categoryId ? newType : text}</div>
        </div>

        <div id={styles.cardGridSectionSection2}>
          {events?.map((event) => (
            <EventetCard3
              key={event?.id}
              eventId={event?.id}
              title={event?.name}
              imageSrc={event?.images}
              linkTo={event?.id}
            ></EventetCard3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriSpecifikeEventesh;
