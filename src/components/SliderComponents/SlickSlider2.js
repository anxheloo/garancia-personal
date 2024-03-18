import React, { useRef } from "react";
import EventetSotCard from "../Eventet/EventetSotCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "../../pages/evente.module.css";

const SlickSlider2 = ({ data, cardType, eventet }) => {
  const slickRef = useRef(null);

  const settings = {
    // dots: true,
    // centerMode: true,
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
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        <Slider className={styles.sliderMain} {...settings} ref={slickRef}>
          {eventet.map((event) => (
            <EventetSotCard
              key={event?.id} // Add a unique key prop for each event
              linkTo={event?.id}
              imageSrc={event?.images} // Make sure to pass the correct image source
              category={
                event.event_categories[0] && event.event_categories[0].name
              }
              title={event?.name}
              description={event?.description}
              location={event?.meta_data._event_location}
              date={event?.meta_data._event_start_date}
              startTime={event?.meta_data._event_start_time}
              endTime={event?.meta_data._event_end_time}
              eventId={event?.id}
            />
          ))}
          {/* <EventetSotCard
            linkTo={""}
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2 sadfsadfdsaf sadf dsaf dsaf sa"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
            eventId={1}
          ></EventetSotCard> */}

          {/* <EventetSotCard
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
            linkTo={""}
          ></EventetSotCard>

          <EventetSotCard
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
          ></EventetSotCard>

          <EventetSotCard
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
          ></EventetSotCard>
          <EventetSotCard
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
          ></EventetSotCard>
          <EventetSotCard
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
          ></EventetSotCard>
          <EventetSotCard
            imageSrc={g1}
            category={"KINEMA"}
            title={"DY GISHT MJALTE 2"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since"
            }
            location={"Cineplexx Albania, TEG"}
            date={"14 Shkurt 2024"}
            time={"20:00 - 22:00"}
          ></EventetSotCard> */}
        </Slider>
      </div>

      <div id={styles.nextBtn} onClick={() => slickRef.current.slickNext()}>
        <IoIosArrowForward />
      </div>

      <div id={styles.prevBtn} onClick={() => slickRef.current.slickPrev()}>
        <IoIosArrowBack />
      </div>
    </>
  );
};

export default SlickSlider2;
