import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import styles from "../styles/Home.module.css";
import Projects from "../components/Projects/Projects";
import { useEffect, useState } from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Testimonial from "../components/Testimonial/Testimonial";
import Link from "next/link";


export default function Home() {
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
  return (
    <div className={styles.mainPage}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&family=Montserrat:wght@300;400;500;900&family=Poppins&family=Roboto+Slab:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar></Navbar>
      <div className={styles.heroVideo}>
        <video autoPlay loop muted>
          <source
            src="https://nkdigitalsolutions.com/wp-content/uploads/2022/11/Untitled-design.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className={styles.greyScreen}></div>
        <div className={styles.videoOverlay}>
          <div className={styles.videoTextMain} >
            <div className={styles.titleMain}>
              <div>
                EMPOWERING
                <br />{" "}
                <span>
                  YOUR<div className={styles.underline}></div>
                </span>{" "}
                GREAT IDEA
              </div>
            </div>
            <div className={styles.videoTextBody}>
              Bespoke Web Design Services | SEO & PPC Services | Creative Brand
              Design | Mobile Apps
            </div>
            <button className={styles.button42}><Link href="/contact">Lets get started!</Link></button>
          </div>
          {/* <div>Review section</div> */}
        </div>
      </div>
      <div className={styles.CMScontainer}>
        <div className={styles.CMStitle}>
          {/* We are experienced with all the popular Content Management Systems */}
          <div>
          We build exceptional online experiences that inspire people and engage
        their clients. We do this by combining UX, Technology, creativity, and
        data. 
          </div>
                 </div>
        <div className={styles.CMSflex}>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/wordpress-1.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/joomla-logo.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/drupal-1.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/magento-1.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src={"./shopify.png"} />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/wordpress-1.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/joomla-logo.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/drupal-1.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src="https://www.candymarketing.co.uk/wp-content/uploads/2021/03/magento-1.svg" />
          </div>
          <div className={styles.CMSchild}>
            <img src={"./shopify.png"} />
          </div>
        </div>
      </div>
      <Services />
      {/* <div className={styles.contentBreakContainer}>Break Content</div> */}
      <Projects />
      {/* <Contact/> */}
      <Testimonial/>
      <Footer />
    </div>
  );
}
