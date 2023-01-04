import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

function Services() {
  const myRef = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.mainContainer} id="services">
      <div className={styles.greyScreen}></div>
      <div
        className={styles.title}
        // data-aos="fade-up" data-aos-duration="500"
      >
        Our Services<div className={styles.underline}></div>
      </div>
      <div
        className={styles.subTitle}
        // data-aos="fade-up"
        // data-aos-duration="500"
      >
        We build exceptional online experiences that inspire people and engage
        their clients. We do this by combining UX, Technology, creativity, and
        data.
      </div>
      <div
        className={styles.servicesMain}
        // data-aos="fade-up"
        // data-aos-duration="500"
      >
        <Link href="/services/web-design">
          <div
            className={styles.servicesMainCard}
            data-aos="fade-up"
            data-aos-duration="700"
            // data-aos-delay="150"
          >
            <div className={styles.titleSection}>
              <img src="./web-design.png" />
            </div>
            <div className={styles.cardTitle}>Creative Web Design</div>
            <div className={styles.cardBody}>
              Crafting beautiful websites that keep your users engaged.
            </div>
          </div>
        </Link>
        <Link href="/services/web-development">
          <div
            className={styles.servicesMainCard}
            data-aos="fade-up"
            data-aos-duration="700"
            // data-aos-delay="150"
          >
            <div className={styles.titleSection}>
              <img src="./web-programming.png" />
            </div>
            <div className={styles.cardTitle}>Web Development</div>
            <div className={styles.cardBody}>
              Building cutting edge websites that encompass the latest
              technology
            </div>
          </div>
        </Link>
        <Link href="/services/branding">
          <div
            className={styles.servicesMainCard}
            data-aos="fade-up"
            data-aos-duration="700"
            // data-aos-delay="150"
          >
            <div className={styles.titleSection}>
              <img src="./branding.png" />
            </div>
            <div className={styles.cardTitle}>Branding</div>
            <div className={styles.cardBody}>
              Creating and evolving our favorite brands through great design
            </div>
          </div>
        </Link>
        <Link href="/services/graphics-design">
          <div
            className={styles.servicesMainCard}
            data-aos="fade-up"
            data-aos-duration="700"
            // data-aos-delay="150"
          >
            <div className={styles.titleSection}>
              <img src="./ux-design.png" />
            </div>
            <div className={styles.cardTitle}>Graphics Design</div>
            <div className={styles.cardBody}>
              We create concepts and designs to make your brand succeed online
            </div>
          </div>
        </Link>
        <Link href="/services/social-media">
          <div
            className={styles.servicesMainCard}
            data-aos="fade-up"
            data-aos-duration="700"
            // data-aos-delay="150"
          >
            <div className={styles.titleSection}>
              <img src="./social-media.png" />
            </div>
            <div className={styles.cardTitle}>Social Media</div>
            <div className={styles.cardBody}>
              Create a campaign or marketing strategy to reach millions on
              social media
            </div>
          </div>
        </Link>
        <Link href="/services/hosting">
          <div
            className={styles.servicesMainCard}
            data-aos="fade-up"
            data-aos-duration="700"
            // data-aos-delay="150"
          >
            <div className={styles.titleSection}>
              <img src="./cloud-computing.png" />
            </div>
            <div className={styles.cardTitle}>Hosting</div>
            <div className={styles.cardBody}>
              Powerful dedicated web server that guarantees you 100% uptime on
              your project
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Services;
