import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

function SocialMedia() {
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
      <div className={styles.bannerServicesS}>
        <div className={styles.bannerCover}></div>
        <div
          className={styles.bannerText}
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          Social Media
        </div>
        <div className={styles.arrowDown} onClick={() => executeScroll()}>
          <img src="/arrow-services.png" />
        </div>
      </div>
      <div className={styles.contentBreak} ref={myRef}></div>
      <div className={styles.servicesDescribed}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            What is it?
          </h1>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            Word of mouth is one of the most powerful marketing tools available.
            We sum up social media marketing as word of mouth on steroids. It
            represents a seismic shift in the way the world communicates. Also
            known as SMO (social media optimization) and SMM (social media
            marketing) it is certainly not a fad and it’s not just for kids.
            Social media is transforming the way people interact with brands and
            the relationships they build with them.
          </p>
          <br></br>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            NK Digital Solutions boosts brand awareness, through the most
            suitable social channels and communities for your business. This
            guides interested searchers to your website, and encourages them to
            share your content socially with other users.
          </p>
          <br></br>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            Depending on your industry and company needs, we utilise a number of
            social channels to market your brand, including social news sites,
            as well as social networks like Facebook and Twitter.
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

export default SocialMedia;
