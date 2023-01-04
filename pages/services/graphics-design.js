import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

function GraphicsDesign() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 140) {
        document.querySelector(
          "#__next > div > div.Navbar_navMain__bTor6"
        ).style.position = "fixed";
        document.querySelector(
          "#__next > div > div.Navbar_navMain__bTor6"
        ).style.zIndex = "10";
      }
      if (window.scrollY < 5) {
        document.querySelector(
          "#__next > div > div.Navbar_navMain__bTor6"
        ).style.position = "unset";
        document.querySelector(
          "#__next > div > div.Navbar_navMain__bTor6"
        ).style.zIndex = "10";
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&family=Montserrat:wght@300;400;500;900&family=Poppins&family=Roboto+Slab:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className={styles.bannerServicesGD}>
        <div className={styles.bannerCover}></div>
        <div
          className={styles.bannerText}
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          Graphic Design
        </div>
        <div className={styles.arrowDown} onClick={() => executeScroll()}>
          <img src="/arrow-services.png" />
        </div>
      </div>
      <div className={styles.contentBreak} ref={myRef}></div>
      <div className={styles.servicesDescribed}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
          Creative Designers
          </h1>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
          Why are we different? Every piece of graphic design that we create is intrinsically linked with our client’s strategic goals. From brand identity, infographics and brochures, to school prospectuses, magazines and presentations, our talented team of multimedia and graphic designers know what it takes to produce stunning work that nails the brief every time. Graphic design is not limited to designing websites.
          </p>
        </div>
        <div className={styles.graphicDesignImage}>
          <img src="https://nkdigitalsolutions.com/wp-content/uploads/2021/08/pexels-photomix-company-106344.jpg" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default GraphicsDesign;
