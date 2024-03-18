import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import PFA from "../components/PFA";
import ImagePreloader from "../components/ImagePreloader";
import classes from "./MySituation.module.css";
import { AllPages_URL } from "../urlexp";
import Kontakto from "../components/Kontakto";
import { Link } from "react-router-dom";
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";

const MySituation = () => {
  const [datas, setDatas] = useState([]);
  const ref = useRef(null);
  useEffect(() => {
    let isMounted = true;
    fetch(AllPages_URL)
      .then((res) => res.json())
      .then((data) => {
        const datasSituation = data.map((datas) => {
          return {
            id: datas.id,
            title: datas.title.rendered,
            description: datas.excerpt.rendered,
            slug: datas.slug,
          };
        });
        if (isMounted) {
          setDatas(datasSituation);
        }
        return () => {
          isMounted = false;
        };
      });
  }, []);
  const backimg = ["../assets/img/home.jpg"];
  const colors = ["#DBFF69", "#B382FE", "#FE4B00"];
  const colors1 = ["#B382FE", "#DBFF69", "#FE4B00"];

  const clickHandler = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
  }
  return (
    <>
      <Seo
        title={"Situata Ime - Youth Guarantee"}
        description={"Situata ime"}
        type={"web app"}
      />
      <div className={classes.desktopFixed}>
        <Header clickHandler={clickHandler} />
        <PFA />
      </div>
      <ImagePreloader imageUrls={backimg} />
      <div>
        <div className={`d-flex  flex-column align-items-center justify-content-center  ${classes.backgdiv}`}></div>
      </div>
     
      <div className={`${classes.backsituation}`}>
        <div
          className={`d-flex justify-content-center ${classes.situationheader} pt-5`}
        >
          Situata ime
        </div>
        <div className={`d-md-flex container`}>
          <div className={`d-md-flex flex-wrap ${classes.pb7}`}>
            {datas.map((item, index) => {
              const rowIndex = Math.floor(index / 3);
              let borderColor;
              if (rowIndex % 2 === 0) {
                borderColor = colors[index % colors.length];
              } else {
                const reversedColors = [...colors].reverse();
                borderColor = reversedColors[index % reversedColors.length];
              }
              if (rowIndex === 2) {
                borderColor = colors1[index % colors1.length];
              }
              return (
                <div key={item.id} className={` ${classes.spacessituation}`}>
                  <div
                    className={`${classes.backgwhite} ${classes.paddok} h-100`}
                    style={{ border: `3px solid ${borderColor}` }}
                  >
                    <Link to={`/situataime/${item.slug}`}>
                      <div className={`${classes.titlecard}`}>{item.title}</div>
                    </Link>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                      className={`${classes.desccard}`}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Kontakto ref={ref} />
    </>
  );
};

export default MySituation;
