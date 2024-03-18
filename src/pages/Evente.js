import React, { useState, useRef } from "react";
import Header from "../components/Header";
import styles from "./evente.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import arrow from "../assets/img/right.svg";
import arrowLeft from "../assets/img/left.svg";
import locationSvg from "../assets/img/location.svg";
import timeSvg from "../assets/img/time.svg";
import eventetEJaves from "../assets/img/eventet-e-javes.svg";
import Element from "../components/Eventet/Element";
import sygjerimeLogo from "../assets/img/sygjerime.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import argetimDheSportIcon from "../assets/img/NewIcons/Argetim dhe Sport-white.svg";
import argetimDheSportIconBlack from "../assets/img/NewIcons/Argetim dhe Sport.svg";
import kinemaDheTeaterIcon from "../assets/img/NewIcons/Kinema dhe Teater-white.svg";
import kinemaDheTeaterIconBlack from "../assets/img/NewIcons/Kinema dhe Teater.svg";
import panairDheEkspoziteIcon from "../assets/img/NewIcons/Panair dhe Ekspozite-white.svg";
import panairDheEkspoziteIconBlack from "../assets/img/NewIcons/Panair dhe Ekspozite.svg";
import SlickSlider from "../components/SliderComponents/SlickSlider";
import useFetch from "../hooks/FetchDatas";
import SlickSlider2 from "../components/SliderComponents/SlickSlider2";
import { formatTime, convertDateToNormal } from "../hooks/utilities";

const Evente = () => {
  const {
    data,
    isLoading,
    error,
    refetch,
    kategoriFeatured,
    kategoriSygjerimetTona,
    kategoriEventetSot,
    kategoriArgetimDheSport,
    kategoriKinemaDheTeater,
    kategoriPanairDheEkspozite,
  } = useFetch();
  const [imageIndex, setImageIndex] = useState(0);
  const swiperRef = useRef(null);

  const images = kategoriFeatured.map((event, index) => {
    const formattedTime = formatTime(event.meta_data._event_start_time);
    const formattedDate = convertDateToNormal(
      event.meta_data._event_start_date
    );

    return {
      id: index,
      img: event.images,
      title: event.name,
      formattedDate: formattedDate,
      formattedTime: formattedTime,
      key: event.id,
      linkTo: event.id,
      imageSrc: event.images,
      category: event.event_categories[0] && event.event_categories[0].name,
      description: event.description,
      location: event.meta_data._event_location,
      date: event?.meta_data._event_start_date,
      startTime: event.meta_data._event_start_time,
      endTime: event.meta_data._event_end_time,
      eventId: event.id,
    };
  });

  const handleSlideChange = (swiper) => {
    setImageIndex(swiper.realIndex);
  };

  return (
    <div id={styles.container}>
      <Header></Header>

      <div id={styles.mainSection}>
        <div id={styles.sliderMainContainer}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <img
              id="image-background-dynamic"
              src={images[imageIndex]?.img}
              alt="img"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                filter: "blur(50px)",
              }}
            ></img>

            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)", // semi-transparent black color
              }}
            ></div>
          </div>

          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <Swiper
              ref={swiperRef}
              id={styles.swiper}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              // loop={true}
              loop={false}
              slidesPerView={"auto"}
              allowTouchMove={true}
              simulateTouch={true}
              initialSlide={1}
              mousewheel={true}
              slideToClickedSlide={true}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 100,
                modifier: 3,
              }}
              pagination={{ el: ".swiper-pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-nextt",
                prevEl: ".swiper-button-prevv",
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
            >
              {images.map((item, index) => (
                <SwiperSlide
                  id={styles.swiperSlideElement}
                  key={item.id}
                  style={{
                    width: "100%",
                    height: "100%",
                    // maxWidth: "350px",
                    // maxHeight: "350px",
                    // maxWidth: "440px",
                    // maxHeight: "440px",
                    aspectRatio: 1 / 1,
                  }}
                >
                  <a key={index} href={`eventet/event-details/${item.eventId}`}>
                    <img
                      alt="from-fetch"
                      src={item.img}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    ></img>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-prevv" id={styles.swiperButtonPrevv}>
              <img
                src={arrowLeft}
                alt="arrow"
                className={{
                  width: "100%",
                  height: "100%",
                }}
              ></img>
            </div>

            <div className="swiper-button-nextt" id={styles.swiperButtonNextt}>
              <img
                src={arrow}
                alt="arrow"
                className={{ width: "100%", height: "100%" }}
              ></img>
            </div>
          </div>
        </div>

        <div id={styles.eventsDetailsContainer}>
          <div id={styles.title}>{images[imageIndex]?.title}</div>

          <div id={styles.locationDataTimeContainer}>
            <div id={styles.location}>
              <span>
                <img
                  src={locationSvg}
                  alt="location-icon"
                  style={{ marginBottom: "3px" }}
                ></img>
              </span>
              {images[imageIndex]?.location}
            </div>
            <div id={styles.data}>{images[imageIndex]?.formattedDate}</div>
            <div id={styles.time}>
              <span style={{ marginBottom: "5px" }}>
                <img src={timeSvg} alt="time-icon"></img>
              </span>
              {images[imageIndex]?.formattedTime}
            </div>
          </div>
        </div>
      </div>

      <div id={styles.categories}>
        <Element
          logoSrc={argetimDheSportIcon}
          linkToSrc={"/argetim-dhe-sport"}
          text={"Argëtim & sport"}
        ></Element>

        <Element
          logoSrc={kinemaDheTeaterIcon}
          linkToSrc={"/kinema-dhe-teater"}
          text={"KINEMA & TEATër"}
        ></Element>

        <Element
          logoSrc={panairDheEkspoziteIcon}
          linkToSrc={"/panair-dhe-ekspozite"}
          text={"PANAIR & EKSPOZITë"}
        ></Element>

        <Element
          logoSrc={eventetEJaves}
          linkToSrc={"/eventet-e-muajit"}
          text={"Eventet e muajit"}
        ></Element>
      </div>

      {kategoriEventetSot.length > 0 && (
        <div
          id={styles.sygjerimetTonaContainer}
          style={{ backgroundColor: "#f8f5ee", color: "#fe4b00" }}
        >
          <div id={styles.sygjerimetTona}>
            <div style={{ width: "100%", height: "100%" }}>
              <div id={styles.eventetSotTitle}>EVENTET SOT</div>

              {/* <SlickSlider cardType={"long"}></SlickSlider> */}
              <SlickSlider2 eventet={kategoriEventetSot}></SlickSlider2>
            </div>
          </div>
        </div>
      )}

      {kategoriSygjerimetTona.length > 0 && (
        <div id={styles.sygjerimetTonaContainer}>
          <div
            style={{
              width: "100%",
              height: "50%",
              position: "absolute",
              right: 0,
              left: 0,
              top: 0,
              backgroundColor: "#fe4b00",
            }}
          ></div>

          <div
            style={{
              width: "100%",
              height: "50%",
              position: "absolute",
              right: 0,
              left: 0,
              bottom: 0,
              backgroundColor: "#fdc7c4",
            }}
          ></div>

          <div id={styles.sygjerimetTona}>
            <div style={{ width: "100%", height: "100%" }}>
              <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <img src={sygjerimeLogo} alt="sygjerime"></img>
              </div>
              <div id={styles.eventetSotTitle} style={{ color: "white" }}>
                Sygjerimet Tona
              </div>

              <SlickSlider
                cardType={"short"}
                events={kategoriSygjerimetTona}
              ></SlickSlider>
            </div>
          </div>
        </div>
      )}

      <div id={styles.kategoriEventesh}>
        {kategoriArgetimDheSport.length > 0 && (
          <>
            <div id={styles.kategoriSpecifikeTitleSection}>
              <img
                src={argetimDheSportIconBlack}
                alt="argetim"
                width={"40px"}
              ></img>
              <div id={styles.kategoriSpecifikeTitle}>Argëtim dhe sport</div>
            </div>
            <div id={styles.kategoriSpecifikeContainer}>
              <SlickSlider
                cardType={"short"}
                events={kategoriArgetimDheSport}
              ></SlickSlider>
            </div>
          </>
        )}

        {kategoriKinemaDheTeater.length > 0 && (
          <>
            <div id={styles.kategoriSpecifikeTitleSection}>
              <img
                src={kinemaDheTeaterIconBlack}
                alt="kinema dhe teater"
                width={"40px"}
              ></img>
              <div id={styles.kategoriSpecifikeTitle}>KINEMA DHE TEATëR</div>
            </div>
            <div id={styles.kategoriSpecifikeContainer}>
              <SlickSlider
                cardType={"short"}
                events={kategoriKinemaDheTeater}
              ></SlickSlider>
            </div>
          </>
        )}

        {kategoriPanairDheEkspozite.length > 0 && (
          <>
            <div id={styles.kategoriSpecifikeTitleSection}>
              <img
                src={panairDheEkspoziteIconBlack}
                alt="panair dhe ekspozite"
                width={"30px"}
              ></img>
              <div id={styles.kategoriSpecifikeTitle}>PANAIR DHE EKSPOZITë</div>
            </div>
            <div id={styles.kategoriSpecifikeContainer}>
              <SlickSlider
                cardType={"short"}
                events={kategoriPanairDheEkspozite}
              ></SlickSlider>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Evente;
