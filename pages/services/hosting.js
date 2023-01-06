import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

function Hosting() {
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
      <div className={styles.bannerServicesH}>
        <div className={styles.bannerCover}></div>
        <div
          className={styles.bannerText}
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          Hosting
        </div>
        <div className={styles.arrowDown} onClick={() => executeScroll()}>
          <img src="/arrow-services.png" />
        </div>
      </div>
      <div className={styles.contentBreak} ></div>
      <div className={styles.servicesDescribed} ref={myRef}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Solid Hosting Solutions
          </h1>
          <p >
            Our web hosting service covers everything from storing the files
            that power your website on a secure server to the networking
            connectivity that enables the world to see it. It is a home for your
            website to live and grow.
          </p>
          <br></br>
          <p >
            Website hosting is like the energy supply to your home, you don’t
            think about it until it stops working. When this happens, you will
            want an immediate response to fix the problem and get your website
            back up and running. Similarly, when it comes to web hosting you
            want your website to be responsive and available at peak trading
            times. You also want to schedule maintenance for off-peak periods,
            to minimise website disruption for customers.
          </p>
          <br></br>
          <p >
            It is just as important that when there is a problem that needs
            fixing, you need a web hosting response that is quick and effective.
          </p>
          <br></br>
          <p >
            By choosing to host your website with us, we can guarantee you peace
            of mind by protecting your website against hacking and server
            failure. You will benefit from high-level security, both on hardware
            and software. We provide regular back-ups and speedy resolutions to
            all hosting issues.{" "}
          </p>
        </div>
        <div className={styles.graphicDesignImage}>
          <img src="https://nkdigitalsolutions.com/wp-content/uploads/2021/08/pexels-photomix-company-106344.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Hosting;
