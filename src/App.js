import "./App.css";
import { Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Homepage from "./pages/Homepage";
import Punesimi from "./pages/punesimi.js";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MySituation from "./pages/MySituation";
import SituationPost from "./pages/SituationPost";
import { StateProvider } from "./components/context";
import RrethNesh from "./pages/RrethNesh";
import PraktikaProf from "./pages/PraktikaProf";
import ProgramPunesimi from "./pages/ProgramPunesimi";
import ProgNmPune from "./pages/ProgNmPune";
import Subvencione from "./pages/Subvencione";
import PuneKomunitet from "./pages/PuneKomunitet";
import VPunesimi from "./pages/Vpunesimi";
import FAQ from "./pages/FAQ";
import Suksese from "./pages/Sukses.js";
import Arsimi from "./pages/Arsimi";
import ArsimiProf from "./pages/ArsimiProf";
import ArsimiNen from "./pages/ArsimiNen";
import NotFound from "./pages/Error";
import ProfesionalFormation from "./pages/FormimiProfesional/ProfesionalFormation";
import SubFProfesional from "./pages/FormimiProfesional/SubFProfesional";
import CodingProgram from "./pages/FormimiProfesional/Codingprograme";
import DigitalCourse from "./pages/FormimiProfesional/DigitalCourse";
import { HelmetProvider } from "react-helmet-async";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { AllPages_URL } from "./urlexp";
import { AuthProvider } from "./data/AuthContext";
import Login from "./pages/Login";
import Evente from "./pages/Evente.js";
import CategoriSpecifikeEventesh from "./pages/CategoriSpecifikeEventesh.js";
import EventSpecifik from "./pages/EventSpecifik.js";

const Error = (props) => {
  useEffect(() => props.handleShow(false), []);
  return <NotFound />;
};
const LoginPage = (props) => {
  useEffect(() => props.handleShow(false), []);
  return <Login />;
};

function App() {
  const { id } = useParams();
  const [show, setShow] = useState(true);
  useEffect(() => {
    setShow(true);
  }, [id]);

  const localStorageItem = localStorage.getItem("auth");

  const [datas, setDatas] = useState([]);
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

  return (
    <>
      <StrictMode>
        <StateProvider datas={datas}>
          <ScrollToTop />
          <AuthProvider>
            <HelmetProvider>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/Arsimi" element={<Arsimi />} />
                <Route path="/situataime" element={<MySituation />} />
                <Route
                  path="/Formim-Profesional"
                  element={<ProfesionalFormation />}
                />
                <Route path="/situataime/:slug" element={<SituationPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/Suksese" element={<Suksese />} />
                <Route
                  path="*"
                  element={<Error handleShow={(res) => setShow(false)} />}
                />
                <Route path="/Punesimi" element={<Punesimi />} />
                <Route path="/Arsimi-Profesional" element={<ArsimiProf />} />
                <Route
                  path="/Arsimi-Profesional-Nenmenu"
                  element={<ArsimiNen />}
                />
                <Route path="/Rreth-Nesh" element={<RrethNesh />} />
                <Route
                  path="/Praktika-Profesionale"
                  element={<PraktikaProf />}
                />
                <Route path="/Program-Punesimi" element={<ProgramPunesimi />} />
                <Route
                  path="/Formimi-Nepermjet-Punes"
                  element={<ProgNmPune />}
                />
                <Route path="/Program-Subvencione" element={<Subvencione />} />
                <Route
                  path="/Program-Pune-Komunitet"
                  element={<PuneKomunitet />}
                />
                <Route path="/Program-Vetepunesimi" element={<VPunesimi />} />
                <Route
                  path="/Kurse-Formim-Profesional"
                  element={<SubFProfesional />}
                />
                <Route path="/Program-Kodimi" element={<CodingProgram />} />
                <Route
                  path="/Kursi-Aftesi-Digjitale"
                  element={<DigitalCourse />}
                />

                <Route path="eventet">
                  <Route index element={<Evente />} />

                  <Route
                    path="kinema-dhe-teater"
                    element={
                      <CategoriSpecifikeEventesh
                        type={"kinema-dhe-teatër"}
                        categoryId={40}
                      />
                    }
                  />

                  <Route
                    path="panair-dhe-ekspozite"
                    element={
                      <CategoriSpecifikeEventesh
                        type={"panair-dhe-ekspozitë"}
                        categoryId={43}
                      />
                    }
                  />

                  <Route
                    path="argetim-dhe-sport"
                    element={
                      <CategoriSpecifikeEventesh
                        type={"argëtim-dhe-sport"}
                        categoryId={39}
                      />
                    }
                  />

                  <Route
                    path="eventet-e-muajit"
                    element={
                      <CategoriSpecifikeEventesh
                        type={"eventet-e-muajit"}
                        categoryId={""}
                        text={"Aktivitetet e garancisë rinore"}
                      />
                    }
                  />

                  <Route path="event-details">
                    <Route path=":eventId" element={<EventSpecifik />}></Route>
                  </Route>
                </Route>

                <Route
                  path="Login"
                  element={<LoginPage handleShow={(res) => setShow(false)} />}
                />
              </Routes>
            </HelmetProvider>

            {show && localStorageItem && <Footer />}
          </AuthProvider>
        </StateProvider>
      </StrictMode>
    </>
  );
}

export default App;
