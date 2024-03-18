import React, { Suspense, useRef } from "react";
import Header from "../components/Header";
import PFA from "../components/PFA";
import styles from "./Homepage.module.css";
import MediaQuery from "react-responsive";
// import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";
import ImagePreloader from "../components/ImagePreloader";
import img1 from "../../src/assets/img/home.jpg";
import AddLinksToHead from "../components/AddLinksToHead";
import img2 from "../assets/img/keshillat1.jpg";
import { Seo } from "../components/Seo";
import { HelmetProvider } from "react-helmet-async";
import CareerAdvice from "../components/CareerAdvice";
import BackgroundImagePreloader from "../components/BackgroundImagePreloader";
import img3 from "../assets/img/GR.jpg";
import arrowBeige from "../assets/img/AdviceTwo.svg";
import arrowGreen from "../assets/img/AdviceOne.svg";
import CareerAdvice1 from "../assets/img/Homepage3.jpg";
import CareerAdviceMobile from "../assets/img/Homepage3.jpg";
import CareerAdvice2 from "../assets/img/homepage2.jpg";
import { useAuth } from "../data/AuthContext";

const Homepage = () => {
  const ref = useRef(null);
  const links = [
    {
      rel: "preload",
      href: img1,
      as: "image",
    },
    {
      rel: "preload",
      href: img2,
      as: "image",
    },
  ];
  const backimg = [img1, img2];
  const Keshilla = React.lazy(() => import("../components/Keshilla"));
  const Imazh = React.lazy(() => import("../components/Imazh"));
  const Details = React.lazy(() => import("../components/Details"));
  const Testimonials = React.lazy(() => import("../components/Testimonials"));
  const Kontakto = React.lazy(() => import("../components/Kontakto"));
  const FotoGar = React.lazy(() => import("../components/LazyImg"));
  const renderLoader = () => <p>Loading</p>;
  const clickHandler = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to the login page or show an error message
    return (
      <p className="auth_page">
        You are not authorized to access this page.{" "}
        <Link to="/Login">Please Login</Link>{" "}
      </p>
    );
  }

  return (
    <>
      <Seo
        title={"Home - Youth Guarantee"}
        description={"Ju prezantojmë Garancinë Rinore"}
        type={"web app"}
      />

      <div className={styles.desktopFixed}>
        <Header clickHandler={clickHandler} />
        <PFA />
      </div>

      {/* <Header clickHandler={clickHandler}></Header>
      <PFA></PFA> */}
      <AddLinksToHead links={links} />
      {/* <ImagePreloader imageUrls = {backimg}/> */}
      {/* <BackgroundImagePreloader imageUrls = {backimg}/> */}
      <div
        className={`d-flex  flex-column align-items-center justify-content-center }`}
      >
        <div
          className={`d-flex  flex-column align-items-center justify-content-center w-100 ${styles.fixedSpace}  ${styles.backgdiv}`}
        >
          <div
            className={`fw-bolder pb-5 pt-5 text-light text-center ${styles.fstitull} ${styles.linehmob} ${styles.padtextalign}`}
          >
            Ju prezantojmë Garancinë Rinore
          </div>
          <div
            className={`${styles.maxwidback} text-center text-light fs-4 ps-md-3 pe-md-3 ${styles.lh1} ${styles.padtextalign}`}
          >
            Një iniciativë e projektuar për të garantuar që çdo person i ri i
            papunë të ketë mundësinë për të siguruar punësim, marrë një
            profesion, apo vazhduar arsimin, brenda katër muajve.
          </div>
        </div>
      </div>
      <div
        className={`d-flex flex-column align-items-center pt-5 pb-5 ${styles.backorange}`}
      >
        <div
          className={`text-center pb-4 ${styles.colorange} ${styles.lh1} ${styles.maxwidth800} px-md-3  ${styles.padtextalign}`}
        >
          “Ne besojmë në potencialin dhe vullnetin e çdo të riu shqiptar për
          progres”
        </div>
        <div
          className={`text-center fw-bolder ps-md-5 pe-md-5 col-md-10 ${styles.lh1}  ${styles.padtextalign}  ${styles.maxwidth1300}`}
        >
          Kuptojmë sfidat që përballen sot të rinjtë dhe rëndësinë e pajisjes së
          tyre me aftësitë dhe përvojat e nevojshme për të patur sukses në një
          treg dinamik, lokal dhe global, fizik dhe online.
        </div>
      </div>
      <div className="d-md-flex w-100">
        {/* reloadDocument ={true}  */}
        <Link to="/punesimi" className={`text-decoration-none  col-md-4`}>
          <div
            className={`d-flex flex-column align-items-center text-center ${styles.back1} pt-5 pb-5 text-light justify-content-center ${styles.minheight360} ps-3 pe-3 ps-md-0 pe-md-0`}
          >
            <div className={`fw-bolder fs-2  ${styles.fsbold}`}>PUNËSIM</div>
            <div
              className={`${styles.fs23} px-3 fw-normal px-md-0 ${styles.grotf} ${styles.maxw350}`}
            >
              Përmes Garancisë Rinore, mundësitë tuaja për të gjetur vendin tuaj
              në tregun e punës përmes punësimit ose intership, janë të shumta.
            </div>
          </div>
        </Link>
        <Link
          to="/Formim-Profesional"
          className={`text-decoration-none  col-md-4`}
        >
          <div
            className={`d-flex flex-column align-items-center text-center ${styles.back2} pt-5 pb-5 ${styles.colgreen}  col-md-4 justify-content-center ${styles.minheight360} ps-3 pe-3 ps-md-0 pe-md-0 w-100`}
          >
            <div className={`fw-bolder fs-2  ${styles.fsbold}`}>
              FORMIM PROFESIONAL
            </div>
            <div
              className={`px-3 fw-normal px-md-0 ${styles.grotf} ${styles.maxw350} ${styles.fs23}`}
            >
              Përmes kurseve tona të Formimit Profesional, rrisni njohuritë dhe
              mundësitë tuaja për të gjetur veten në tregun e punës.
            </div>
          </div>
        </Link>

        <Link to="/Arsimi" className={`text-decoration-none  col-md-4`}>
          <div
            className={`d-flex flex-column  align-items-center text-center ${styles.back3} pt-5 pb-5 text-light col-md-4 justify-content-center ${styles.minheight360} ps-3 pe-3 ps-md-0 pe-md-0 w-100`}
          >
            <div className={`fw-bolder fs-2  ${styles.fsbold}`}>ARSIM</div>
            <div
              className={`px-3 fw-normal px-md-0 ${styles.grotf} ${styles.maxw350} ${styles.fs23}`}
            >
              Zbuloni rrugëtimin shpërblyes të një profesionisti të ri në
              shkollat e Arsimit Profesional dhe bëhu pjesë.
            </div>
          </div>
        </Link>
      </div>
      <div className={`d-md-flex w-100`}>
        <div className={`col-md-6 ${styles.imgSize}`}>
          <Suspense fallback={renderLoader()}>
            <FotoGar
              src={require("../assets/img/garancia_premtimAsset 2-100.jpg")}
            />
          </Suspense>
        </div>
        <div
          className={`col-md-6 ${styles.backgreen} d-flex flex-column justify-content-center ps-5 pe-5 py-5 py-md-0`}
        >
          <div
            className={`${styles.colyell} ${styles.lineh1} ps-md-4 pb-md-5 pb-3 ${styles.fsshum} `}
          >
            Garancia Rinore është më shumë se një premtim!
          </div>
          <div
            className={`text-light ${styles.fsdetail} pb-md-5 pb-4 ps-md-4 ${styles.maxwidth750} ${styles.lineh1}`}
          >
            Garancia Rinore është një angazhim për të krijuar një të ardhme ku
            asnjë i ri të mos lihet pas.
          </div>
          <div
            className={`text-light ${styles.fsdetail} pb-5 ps-md-4 ${styles.maxwidth750} ${styles.lineh1}`}
          >
            Besojmë thellësisht se duke investuar në potencialin e rinisë sonë,
            mund të ndërtojmë një të ardhme më të mirë dhe të qëndrueshme për të
            gjithë.
          </div>
          <div className={`${styles.learnmore} ms-md-4 mt-md-5`}>
            <Link to="/Rreth-Nesh" className={"text-decoration-none"}>
              MËSO MË TEPËR
            </Link>
          </div>
        </div>
      </div>
      <MediaQuery minWidth={800}>
        <Suspense fallback={renderLoader()}>
          <Keshilla
            left={
              <div className={`col-md-6`}>
                <CareerAdvice
                  title="Keshilla <br> Karriere"
                  src={arrowBeige}
                  foto={CareerAdvice1}
                />
              </div>
            }
            right={
              <Details
                butoni="MË SHUMË RRETH PUNËSIMIT"
                backcgroundColor="#fe4b00"
                backgroundCol="#f9f6f0"
                marginTop="150px"
                href="/Punesimi"
              >
                <div
                  className={`${styles.fsshum} ${styles.lineh1} pb-5 ps-4 ${styles.colgreen} ${styles.detailtit}`}
                >
                  Garanci për një vend pune, por jo vetëm.
                </div>
                <div
                  className={`${styles.fsdetail} ps-4 ${styles.lineh1} ${styles.colgreen}`}
                >
                  Mund të jesh në fillim të karrierës tënde ose të kesh kaluar
                  disa vite në një profesion, por kurrë nuk është vonë për të
                  ndjekur pasionin tënd dhe për të fituar njohuri të reja.
                </div>
              </Details>
            }
          />

          <Keshilla
            left={
              <Details
                butoni="MË SHUMË RRETH FORMIMIT PROFESIONAL"
                backcgroundColor="#033e3c"
                backgroundCol="#dbff69"
                marginTop="150px"
                href="/Formim-Profesional"
              >
                <div
                  className={`${styles.fsshum} ${styles.lineh1} pb-5 ps-4 ${styles.colgreen} ${styles.detailtit}`}
                >
                  Nuk është asnjëherë vonë për të fituar një profesion të ri.
                </div>
                <div
                  className={`${styles.fsdetail} ps-4 ${styles.lineh1} ${styles.colgreen}`}
                >
                  Garancia Rinore ofron mundësi reale jo vetëm për të siguruar
                  një vend pune, por për t’i dhënë vetes një shans për rritje
                  profesionale dhe personale.
                </div>
              </Details>
            }
            right={
              <div className={`col-md-6 position-relative`}>
                <Imazh
                  src={require("../assets/img/GR1.jpg")}
                  objFit="cover"
                  alt={
                    "Nuk është asnjëherë vonë për të fituar një profesion të ri"
                  }
                ></Imazh>
              </div>
            }
          />

          <Keshilla
            left={
              <div className={`col-md-6`}>
                <CareerAdvice
                  title="Keshilla <br> Karriere"
                  src={arrowGreen}
                  foto={CareerAdvice2}
                  backgroundColor="#b382fe"
                />
              </div>
            }
            right={
              <Details
                butoni="MË SHUMË RRETH SHKOLLAVE PROFESIONALE"
                backgroundCol="#f9f6f0"
                backcgroundColor="#b382fe"
                marginTop="150px"
                href="/Arsimi-Profesional"
              >
                <div
                  className={`${styles.fsshum} ${styles.lineh1} pb-5 ps-4 ${styles.colgreen} ${styles.detailtit}`}
                >
                  Arsimi Profesional, shumë mundësi
                </div>
                <div
                  className={`${styles.fsdetail} ps-4 ${styles.lineh1} ${styles.colgreen}`}
                >
                  Me arsimin profesional, nuk do të jesh vetëm një student, por
                  një pjesë e një komuniteti të specializuar të studentëve dhe
                  profesionistëve të lidhur me fushën e zgjedhur.
                </div>
              </Details>
            }
          />

          <Testimonials />
          <Kontakto ref={ref}></Kontakto>
        </Suspense>
      </MediaQuery>

      <MediaQuery maxWidth={800}>
        <Suspense fallback={renderLoader()}>
          {" "}
          <Keshilla
            left={
              <div className={`col-md-6 position-relative`}>
                <div className={`col-xl-6 col-12`}>
                  <CareerAdvice
                    title="Keshilla <br> Karriere"
                    src={arrowBeige}
                    foto={CareerAdviceMobile}
                  />
                </div>
              </div>
            }
            right={
              <Details
                butoni="MË SHUMË RRETH PUNËSIMIT"
                backcgroundColor="#fe4b00"
                backgroundCol="#f9f6f0"
                marginTop="15px"
                href="/Punesimi"
              >
                <div
                  className={`${styles.fsshum} ${styles.lineh1} pb-3 ${styles.colgreen}`}
                >
                  Garanci për një vend pune, por jo vetëm.
                </div>
                <div className={`${styles.fsdetail} ${styles.colgreen}`}>
                  Mund të jesh në fillim të karrierës tënde ose të kesh kaluar
                  disa vite në një profesion, por kurrë nuk është vonë për të
                  ndjekur pasionin tënd dhe për të fituar njohuri të reja.
                </div>
              </Details>
            }
          />
          <Keshilla
            left={
              <div className={`col-md-6 position-relative`}>
                <Imazh
                  src={require("../assets/img/GR1.jpg")}
                  alt={
                    "Nuk është asnjëherë vonë për të fituar një profesion të ri"
                  }
                ></Imazh>
              </div>
            }
            right={
              <Details
                butoni="MË SHUMË RRETH FORMIMIT PROFESIONAL"
                backcgroundColor="#033e3c"
                backgroundCol="#dbff69"
                marginTop="15px"
                href="/Formim-Profesional"
              >
                <div
                  className={`${styles.fsshum} ${styles.lineh1} pb-3 ${styles.colgreen}`}
                >
                  Nuk është asnjëherë vonë për të fituar një profesion të ri.
                </div>
                <div className={`${styles.fsdetail} ${styles.colgreen} `}>
                  Garancia Rinore ofron mundësi reale jo vetëm për të siguruar
                  një vend pune, por për t’i dhënë vetes një shans për rritje
                  profesionale dhe personale.
                </div>
              </Details>
            }
          />
          <Keshilla
            left={
              <div className={`col-xl-6 col-12`}>
                <CareerAdvice
                  title="Keshilla <br> Karriere"
                  src={arrowGreen}
                  foto={CareerAdvice2}
                  backgroundColor="#b382fe"
                />
              </div>
            }
            right={
              <Details
                butoni="MË SHUMË RRETH SHKOLLAVE PROFESIONALE"
                backgroundCol="#f9f6f0"
                marginTop="15px"
                backcgroundColor="#b382fe"
                href="/Arsimi-Profesional"
              >
                <div
                  className={`${styles.fsshum} ${styles.lineh1} pb-3 ${styles.colgreen}`}
                >
                  Arsimi Profesional, shumë mundësi
                </div>
                <div className={`${styles.fsdetail} ${styles.colgreen}`}>
                  Me arsimin profesional, nuk do të jesh vetëm një student, por
                  një pjesë e një komuniteti të specializuar të studentëve dhe
                  profesionistëve të lidhur me fushën e zgjedhur.
                </div>
              </Details>
            }
          />
          <Testimonials />
          <Kontakto ref={ref}></Kontakto>
        </Suspense>
      </MediaQuery>
    </>
  );
};

export default Homepage;
