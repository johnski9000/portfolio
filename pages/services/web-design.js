import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

function WebDesign() {
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
      <div className={styles.bannerServicesWD}>
        <div className={styles.bannerCover}></div>
        <div
          className={styles.bannerText}
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          Web Design
        </div>
        <div className={styles.arrowDown} onClick={() => executeScroll()}>
          <img src="/arrow-services.png" />
        </div>
      </div>
      <div className={styles.contentBreak} ></div>
      <div className={styles.servicesDescribed} ref={myRef}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
           What we do
          </h1>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            If you’re looking for an innovative, award-winning web design agency
            in Manchester that can deliver exceptional web design, as well as
            professional, friendly advice, then you’ve found the right team.
          </p>
          <br></br>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            JW Digital is a Altrincham-based website design agency
            with a fully qualified and dedicated development team. Our client’s
            trust in the work we produce is our top priority. Our qualified
            skillset and collaboration produce beautiful, bespoke digital user
            experiences that connect you with your customers through data
            strategy, design creativity, and technical expertise.
          </p>
        </div>
        <div className={styles.webDesignImage}>
          <img src="/webDesign2.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WebDesign;
