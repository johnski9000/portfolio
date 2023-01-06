import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

function WebDevelopment() {
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
      <div className={styles.bannerServicesWB}>
        <div className={styles.bannerCover}></div>
        <div
          className={styles.bannerText}
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          Web Development
        </div>
        <div className={styles.arrowDown} onClick={() => executeScroll()}>
          <img src="/arrow-services.png" />
        </div>
      </div>
      <div className={styles.contentBreak} ></div>
      <div className={styles.servicesDescribed} ref={myRef}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Stunning web design optimised for mobile
          </h1>
          <p data-aos="fade-up"  data-aos-duration="1000">
            All our websites are entirely bespoke and designed completely from
            scratch. Partnering with our award-winning design team, we’ll bring
            your brand to life with best-in-class technology and approaches.
          </p>
          <br></br>
          <p data-aos="fade-up" data-aos-duration="1000">
            Your website will be user and search engine friendly with a fully
            responsive web design that renders seamlessly on mobile. To increase
            engagement across your new website and to highlight key pieces of
            content, we also design a suite of up to 15 bespoke icons and
            illustrations – these can be used on and offline to create unity and
            cohesion across your channels and collateral. Not only will these
            improve the design, they are also proven to increase dwell time,
            user engagement and conversions.
          </p>
        </div>
        <div className={styles.WebDevelopmentImage}>
          <img src="/webDevelopment2.png" />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default WebDevelopment;
