import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { PagesDetail_URL } from "../urlexp";
import Header from "../components/Header";
import PFA from "../components/PFA";
import classes from "./SituationPost.module.css";
import { useAppState } from "../components/context";
import { Seo } from "../components/Seo";
import { useAuth } from "../data/AuthContext";

const SituationPost = () => {
  const { slug } = useParams();
  const stateObject = useAppState();
  const [postData, setPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef();
  useEffect(() => {
    let isMounted = true;
    (async () => {
      const response = await fetch(PagesDetail_URL + slug);
      const data = await response.json();

      const ok = data.map((datas) => {
        let accordionscontainer = datas?.["acf"]?.["accordion"];
        return {
          title: datas.title.rendered,
          id: datas.id,
          desc: datas.content.rendered,
          accordionscontainer: accordionscontainer,
        };
      });
      if (isMounted) {
        setPostData(ok);
        setIsLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [slug]);
  //  if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  // const firstLine = firsLineref.current.split('. ', 1)[0]

  // firsLineref.current.style.opacity = '0'
  const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      // Redirect to the login page or show an error message
      return <p className="auth_page">You are not authorized to access this page. <Link to="/Login">Please Login</Link> </p>;
    }
  return (
    <>
      <div className={classes.desktopFixed}>
        <Header />
        <PFA />
      </div>
      <div
        className={`container-fluid d-md-flex w-100 pe-0 ps-0 ${classes.columnsflex}`}
      >
        <nav className={classes.sidesituations}>
          <div className={`${classes.sideNav}`}>
            {stateObject &&
              stateObject.map((itemleft) => {
                if (itemleft.slug === slug) {
                  return (
                    <div
                      className={`${classes.titlesLeft} ${classes.titlesLeftActive} my-2`}
                      key={itemleft.id}
                    >
                      <Link to={`/situataime/${itemleft.slug}`}>
                        {itemleft.title}
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`${classes.titlesLeft} my-2`}
                      key={itemleft.id}
                    >
                      <Link to={`/situataime/${itemleft.slug}`}>
                        {itemleft.title}
                      </Link>
                    </div>
                  );
                }
              })}
          </div>
        </nav>
        <div className={`${classes.contentside}`}>
          {isLoading ? (
            <div className={`w-100 d-flex justify-content-center vh-100`}>
              <span className={classes.loader}></span>
            </div>
          ) : (
            <>
              {postData?.map((items) => {
                return (
                  <div key={items.id} className={`${classes.maxwidth800}`}>
                    <Seo
                      title={items.title + " - Youth Guarantee"}
                      description={items.desc}
                      type={"web app"}
                    />
                    <div
                      className={`d-flex ${classes.navarea} justify-content-around mb-4`}
                    >
                      <Link to="/">
                        <div className={`${classes.navlinks}`}>Kreu</div>
                      </Link>
                      <Link to="/situataime">
                        <div className={`${classes.navlinks}`}>Situata Ime</div>
                      </Link>
                      <div>{items.title}</div>
                    </div>
                    <h1 className={`${classes.titlecont} mb-4`}>
                      {items.title}
                    </h1>
                    <div
                      className={`mb-4 ${classes.desctitle}`}
                      dangerouslySetInnerHTML={{ __html: items.desc }}
                    ></div>
                    <div className={`${classes.accordionscontainer}`}>
                      <div
                        className="accordion accordion-flush"
                        id={`accordionFlushfaq`}
                      >
                        {items?.accordionscontainer?.map((el, index) => {
                          return (
                            <div className={`accordion-item my-3`} key={index}>
                              <h2
                                className="accordion-header"
                                id={`flush-heading${index}`}
                              >
                                <button
                                  className={`accordion-button collapsed ${classes.buttongap}`}
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#flush-collapse${index}`}
                                  aria-expanded="false"
                                  aria-controls={`flush-collapse${index}`}
                                >
                                  {el.titulli_i_nenpikes}
                                </button>
                              </h2>
                              <div
                                id={`flush-collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`flush-heading${index}`}
                                data-bs-parent={`accordionFlush`}
                              >
                                <div
                                  className={`accordion-body ${classes.accordiondesc}`}
                                  ref={ref}
                                  dangerouslySetInnerHTML={{
                                    __html: el.pershkrimi_i_nenpikes,
                                  }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SituationPost;
