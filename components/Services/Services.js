import React, { useEffect } from "react";
import styles from "./Services.module.css";
import AOS from "aos";
import "aos/dist/aos.css";


function Services() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  
  return (
    <div className={styles.mainContainer}>
      <div className={styles.greyScreen}></div>
      <div className={styles.title} data-aos="fade-up" data-aos-duration="500">Our Services<div className={styles.underline}></div></div>
      <div className={styles.subTitle} data-aos="fade-up" data-aos-duration="500">Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</div>
      <div className={styles.servicesMain}>
        <div className={styles.servicesMainCard} data-aos="fade-up-right" data-aos-duration="500">
          <div className={styles.titleSection} >
            <img src="./web-design.png" />
          </div>
          <div className={styles.cardTitle}>Creative Web Design</div>
          <div className={styles.cardBody}>
          Crafting beautiful websites that keep your users engaged.
          </div>
        </div>
        <div className={styles.servicesMainCard} data-aos="fade-up" data-aos-duration="500">
          <div className={styles.titleSection}>
            <img src="./web-programming.png" />
          </div>
          <div className={styles.cardTitle}>Web Development</div>
          <div className={styles.cardBody}>
          Building cutting edge websites that encompass the latest technology
          </div>
        </div>
        <div className={styles.servicesMainCard} data-aos="fade-up-left" data-aos-duration="500">
          <div className={styles.titleSection}>
            <img src="./branding.png" />
          </div>
          <div className={styles.cardTitle}>Branding</div>
          <div className={styles.cardBody}>
          Creating and evolving our favorite brands through great design
          </div>
        </div>
        <div className={styles.servicesMainCard} data-aos="fade-up-right" data-aos-duration="500">
          <div className={styles.titleSection}>
            <img src="./ux-design.png" />
          </div>
          <div className={styles.cardTitle}>Graphics Design</div>
          <div className={styles.cardBody}>
          We create concepts and designs to make your brand succeed online
          </div>
        </div>
        <div className={styles.servicesMainCard} data-aos="fade-up" data-aos-duration="500">
          <div className={styles.titleSection}>
            <img src="./social-media.png" />
          </div>
          <div className={styles.cardTitle}>Social Media</div>
          <div className={styles.cardBody}>
          Create a campaign or marketing strategy to reach millions on social media
          </div>
        </div>
        <div className={styles.servicesMainCard} data-aos="fade-up-left" data-aos-duration="500">
          <div className={styles.titleSection}>
            <img src="./cloud-computing.png" />
          </div>
          <div className={styles.cardTitle}>Hosting</div>
          <div className={styles.cardBody}>
          Powerful dedicated web server that guarantees you 100% uptime on your project
          </div>
        </div>
      </div>
      {/* <div class={styles.container}>
  <div class={styles.card}>
    <div class={styles.box}>
      <div class={styles.content}>
        <h2>01</h2>
        <h3>Design</h3>
        <p>Our website design specialists transform your vision into reality,
            creating user-friendly, responsive, and engaging sites.</p>
        <a href="#" className={styles.button42}>Read More</a>
      </div>
    </div>
  </div>

  <div class={styles.card}>
    <div class={styles.box}>
      <div class={styles.content}>
        <h2>02</h2>
        <h3>Development</h3>
        <p>We use a wide range of tools to create websites, web portals and
            applications that are easy to use and maintain.</p>
        <a href="#" className={styles.button42}>Read More</a>
      </div>
    </div>
  </div>

  <div class={styles.card}>
    <div class={styles.box}>
      <div class={styles.content}>
        <h2>03</h2>
        <h3>Marketing</h3>
        <p>Professional UK agency offering honest, bespoke, multi-channel
            digital marketing services</p>
        <a href="#" className={styles.button42}>Read More</a>
      </div>
    </div>
  </div>
</div> */}
    </div>
  );
}

export default Services;
