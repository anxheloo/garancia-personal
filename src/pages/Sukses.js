import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './sukses.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Sukses = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await fetch(
        `https://cms.garanciarinore.al/wp-json/wp/v2/pages/279?acf_format=standard`
      );
      const data = await response.json();
      const slideImgs = data?.["acf"]?.["slide-img"];

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
    })();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        id="slider-testimonials1"
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper2"
      >
        {post.media &&
          post.media.map((item, index) => (
            <SwiperSlide key={index}>
              {item.type === "img" && (
                <img
                  src={item.content}
                  alt={`Image ${index + 1}`}
                  style={{ maxWidth: "100%" }}
                />
              )}
              {item.type === "video" && (
                <video controls width="100%" height="auto">
                  <source src={item.content} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Sukses;
