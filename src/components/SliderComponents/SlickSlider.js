import React, { useRef, useEffect, useState } from "react";
import EventetSotCard from "../Eventet/EventetSotCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "../../pages/evente.module.css";
import g0 from "../../assets/img/g0.jpg";
import g1 from "../../assets/img/g1.jpg";
import g2 from "../../assets/img/g2.jpg";
import g3 from "../../assets/img/g3.jpg";
import g4 from "../../assets/img/g4.jpg";
import EventetCard2 from "../Eventet/EventetCard2";
import { useWindowDimensions } from "../../hooks/GetDimensions";

const SlickSlider = ({ data, cardType, events }) => {
  const slickRef = useRef(null);

  const { height, width } = useWindowDimensions();

  const settings = {
    // dots: true,
    // infinite: true,
    infinite: false,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    touchMove: true,
    lazyLoad: "ondemand",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePreviousArrow></SamplePreviousArrow>,
    arrows: false,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.25,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const settings = {
  //   // dots: true,
  //   // centerMode: true,
  //   // infinite: true,
  //   infinite: false,
  //   draggable: true,
  //   swipeToSlide: true,
  //   swipe: true,
  //   touchMove: true,
  //   lazyLoad: "ondemand",
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   // nextArrow: <SampleNextArrow />,
  //   // prevArrow: <SamplePreviousArrow></SamplePreviousArrow>,
  //   arrows: false,
  //   responsive: [
  //     {
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 640,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider id={styles.sliderMain} {...settings} ref={slickRef}>
          {events?.map((event) => (
            <EventetCard2
              key={event?.id}
              eventId={event?.id}
              title={event?.name}
              imageSrc={event?.images}
              linkTo={event?.id}
            />
          ))}
        </Slider>
      </div>

      {
        // cardType === "short" &&
        width > 1280 && (
          <div id={styles.nextBtn} onClick={() => slickRef.current.slickNext()}>
            <IoIosArrowForward />
          </div>
        )
      }

      {/* {cardType === "long" && (
        <div id="next-btn" onClick={() => slickRef.current.slickNext()}>
          <IoIosArrowForward />
        </div>
      )} */}

      {
        // cardType === "short" &&
        width > 1280 && (
          <div id={styles.prevBtn} onClick={() => slickRef.current.slickPrev()}>
            <IoIosArrowBack />
          </div>
        )
      }

      {/* {cardType === "long" && (
        <div id="prev-btn" onClick={() => slickRef.current.slickPrev()}>
          <IoIosArrowBack />
        </div>
      )} */}
    </>
  );
};

export default SlickSlider;

{
  /* <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2>
          <EventetCard2
            title={"Teatri Kombetar eksperimental"}
            imageSrc={g1}
            linkTo={""}
          ></EventetCard2> */
}
