import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import classes from './Testimonials.module.css';

const Testimonials = (props) => {
  const [post, setPost] = useState({});
  const videoRefs = useRef([]);
  const swiperRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await fetch(
          `https://cms.garanciarinore.al/wp-json/wp/v2/pages/279?acf_format=standard`
        );
        const data = await response.json();
        const slideImgs = data?.['acf']?.['slide-img'];

        const media = [];

        if (Array.isArray(slideImgs)) {
          slideImgs.forEach((slideImg) => {
            if (slideImg.img && slideImg.img !== false) {
              media.push({ type: "img", content: slideImg.img });
            }

            if (slideImg.video && slideImg.video !== false) {
              media.push({ type: "video", content: slideImg.video });
            }
          });
        }

        const ok = {
          media: media,
        };

        if (isMounted) setPost(ok);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);
    const [videoWidth, setVideoWidth] = useState("100%");

    useEffect(() => {
      const handleVideoResize = () => {
        const currentSlide = swiperRef.current?.swiper;
        if (currentSlide) {
          const activeIndex = currentSlide.activeIndex;
          const videoElement = videoRefs.current[activeIndex];

          if (videoElement) {
            const aspectRatio = videoElement.videoWidth / videoElement.videoHeight;
            const newWidth = `${aspectRatio * 100}vw`; // Adjust the factor as needed
            setVideoWidth(newWidth);
          }
        }
      };

      const currentSlide = swiperRef.current?.swiper;
      if (currentSlide) {
        currentSlide.on("slideChange", handleVideoResize);
      }

      return () => {
        if (currentSlide) {
          currentSlide.off("slideChange", handleVideoResize);
        }
      };
    }, []);

    const isMobile = window.innerWidth <= 640; // Adjust the breakpoint as needed

  return (
    <div className={`${classes.bckgtestimonial} d-flex flex-column align-items-center`}>
      <div className={`${classes.fsshum} text-center`}>Shumë rrugëtime, një destinacion</div>
      <div className={`${classes.font32} text-center`}>Ndiqni historitë reale të përfituesve prej shërbimeve të Garancisë Rinore</div>
      <div>
      <Swiper
        ref={swiperRef}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: isMobile,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: isMobile,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper4"
        id="slider-testimonials"
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        navigation={true}
      >
        {post.media && post.media.map((item, index) => (
          <SwiperSlide key={index}>
            {item.type === "img" && (
              <img
                src={item.content}
                alt={`Image ${index + 1}`}
              />
            )}
            {item.type === "video" && (
              <video controls height="auto" width={videoWidth}
              ref={(el) => videoRefs.current[index] = el}
              onLoadedMetadata={() => swiperRef.current?.swiper?.update()}>
                <source src={item.content} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper> 
      </div>
    
    
      <div className={classes.descTest}>Njihuni me rezultatet</div>
    </div>
  );
};

export default Testimonials;
