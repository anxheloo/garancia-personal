import React, { useState, useEffect, useRef } from "react";
import classes from "./FAQ.module.css";
// import { Link } from 'react-router-dom';
import Header from "../components/Header";
import PFA from "../components/PFA";
import { Seo } from "../components/Seo";
import Kontakto from "../components/Kontakto";
import { useAuth } from "../data/AuthContext";
import { Link } from "react-router-dom";

const FAQ = () =>{
    const [faqData,setFaqData] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [activeItem, setActiveItem] = useState([]);
    const [isSelected, setIsSelected] = useState(null);
    const ref = useRef();
    useEffect( () => {
        let isMounted = true;    
        (async () => {
          const response = await fetch('https://cms.garanciarinore.al/wp-json/wp/v2/pages/216');
          const data = [await response.json()];
          const ok = data.map((datas) =>{
            let accordionscontainer = datas?.['acf']?.['accordion'];
            return{
              title : datas.title.rendered,
              id: datas.id,
              desc: datas.content.rendered,
              accordionscontainer: accordionscontainer
            }
            
          });
             if(isMounted) 
             {
                setFaqData(ok);
                setActiveItem(ok.map(el => el?.accordionscontainer[0]));
                // setActiveTitle(ok.map(el => el?.accordionscontainer[0]?.titulli_i_nenpikes));
                setIsLoading(false);
             }   
        })(); 
        return () => { isMounted = false }; 
     },[]);

   
    
    // const handleItemClick = (itemId) => {
    //     const selectedItem = faqData.map((el) => el?.accordionscontainer.find((item) => item.titulli_i_nenpikes === itemId));
    //     setActiveItem(selectedItem);
    //     setActiveTitle(itemId);
    //   };

  const handleItemClick = (index) => {
    setIsSelected((prevSelected) => (prevSelected === index ? null : index));
  };

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
        title={"FAQ - Youth Guarantee"}
        description={"PYETJET MË TË SHPESHTA"}
        type={"web app"}
      />
      <div className={classes.desktopFixed}>
        <Header clickHandler={clickHandler} />
        <PFA />
      </div>
      {/* <div className={`container-fluid d-md-flex w-100 pe-0 ps-0`}>
        {isLoading ? (<div className={`w-100 d-flex justify-content-center align-items-center ${classes.height100}`}><span className={classes.loader}></span></div>) : (<>
            <div className={`${classes.questionNav}`}>
                <div className={`${classes.sideNav}`}>
                    {faqData?.map((el) => 
                    <>
                        <div className={`${classes.titleLeft} my-2`}>{el.title}</div>
                        {el?.accordionscontainer.map((item,index) => 
                            <div key = {index} className={activeTitle == item.titulli_i_nenpikes ? `${classes.titlesLeft} my-2 ${classes.titlesLeftActive}` : `${classes.titlesLeft} my-2`} onClick={() => handleItemClick(item.titulli_i_nenpikes)}>
                            
                            {item.titulli_i_nenpikes}
                            
                            </div>
                        )}
                    </>
                    )}
                </div>
            </div>
            <div className={`p-5 ${classes.maxwidth800}`}>
                {activeItem && activeItem.map(el => <>
                    <div className={`d-flex ${classes.navarea} justify-content-around mb-4 mt-3`}>
                        <Link to = "/"><div className={`${classes.navlinks}`}>Kreu</div></Link>
                        <div className={`${classes.navlinks}`}>FAQ</div>
                        <div className={`${classes.titleinfo}`}>{el.titulli_i_nenpikes}</div>
                    </div>

                    <h1 className={`${classes.titlecont} mb-4`}>{el.titulli_i_nenpikes}</h1>
                    <div className={`mt-4 ${classes.faqDesc}`} dangerouslySetInnerHTML={{ __html: el.pershkrimi_i_nenpikes}}></div>
                </>
                )}
            </div>
            </>
        )}
        </div> */}
      {/* <div className={`w-100 ${classes.backgcol}`}>
            <div className={`container`}>
                <div className={`w-100 d-flex flex-column`}>
                    <div className={`w-100 d-flex justify-content-center ${classes.faqheader}`}>Frequently Asked Questions</div>

                        {faqData?.map((el) => {
                            return(
                                <div className="accordion accordion-flush" id={`accordionFlush`}>

                                    {el?.accordionscontainer?.map((item,index) => {
                                        return(

                                            <div className={ isSelected === index ? `accordion-header py-3 ${classes.colchange}`:`accordion-item  ${classes.backgtransparent}`} key={index} >
                                                <h2 className={`accordion-header py-3`} id={`flush-heading${index}`}>
                                                <button className={`accordion-button collapsed ${classes.buttongap}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${index}`} aria-expanded="false" aria-controls={`flush-collapse${index}`}>
                                                    {item.titulli_i_nenpikes}
                                                </button>
                                                </h2>
                                                <div  id={`flush-collapse${index}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index}`} data-bs-parent={`accordionFlush`}>
                                                <div className={`accordion-body ${classes.accordiondesc}`} dangerouslySetInnerHTML={{ __html: item.pershkrimi_i_nenpikes}}></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
         */}
      <div className={`w-100 ${classes.backgcol}`}>
        {isLoading ? (
          <div
            className={`w-100 d-flex justify-content-center align-items-center ${classes.height100}`}
          >
            <span className={classes.loader}></span>
          </div>
        ) : (
          <div className={`container`}>
            <div className={`w-100 d-flex flex-column`}>
              <div
                className={`w-100 d-flex justify-content-center ${classes.faqheader}`}
              >
                Pyetjet më të Shpeshta
              </div>

              {faqData?.map((el, ind) => {
                return (
                  <div
                    className="accordion accordion-flush pb-4"
                    id={`accordionFlush`}
                    key={ind}
                  >
                    {el?.accordionscontainer?.map((item, index) => {
                      return (
                        <div
                          className={`accordion-item ${classes.backgtransparent}`}
                          key={index}
                        >
                          <h2
                            className={
                              isSelected === index
                                ? `accordion-header py-3 ${classes.colchange}`
                                : `accordion-header py-3`
                            }
                            id={`flush-heading${index}`}
                          >
                            <button
                              className={`accordion-button collapsed ${classes.buttongap} ${classes.accordtitle}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#flush-collapse${index}`}
                              aria-expanded="false"
                              aria-controls={`flush-collapse${index}`}
                              onClick={() => handleItemClick(index)} // No direct state update here
                            >
                              {item.titulli_i_nenpikes}
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
                              dangerouslySetInnerHTML={{
                                __html: item.pershkrimi_i_nenpikes,
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {/* <div className={`container`}>
                <div className={`w-100 d-flex flex-column`}>
                    <div className={`w-100 d-flex justify-content-center ${classes.faqheader}`}>Frequently Asked Questions</div>

                    {faqData?.map((el) => {
                    return (
                        <div className="accordion accordion-flush" id={`accordionFlush`}>
                        {el?.accordionscontainer?.map((item, index) => {
                            return (
                            <div
                                className={`accordion-item ${classes.backgtransparent}`}
                                key={index}
                            >
                                <h2 className={isSelected === index ? `accordion-header py-3 ${classes.colchange}` :`accordion-header py-3`} id={`flush-heading${index}`}>
                                <button
                                    className={`accordion-button collapsed ${classes.buttongap} ${classes.accordtitle}`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#flush-collapse${index}`}
                                    aria-expanded="false"
                                    aria-controls={`flush-collapse${index}`}
                                    onClick={() => handleItemClick(index)} // No direct state update here
                                >
                                    {item.titulli_i_nenpikes}
                                </button>
                                </h2>
                                <div
                                id={`flush-collapse${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`flush-heading${index}`}
                                data-bs-parent={`accordionFlush`}
                                >
                                <div className={`accordion-body ${classes.accordiondesc}`} dangerouslySetInnerHTML={{ __html: item.pershkrimi_i_nenpikes }}></div>
                                </div>
                            </div>
                            );
                        })}
                        </div>
                    );
                    })}
                </div>
            </div> */}
      </div>
      <Kontakto ref={ref}></Kontakto>
    </>
  );
};

export default FAQ;
