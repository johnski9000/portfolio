import React from "react";
import styles from "./Services.module.css";

function Services() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>Our Services</div>
      <div className={styles.subTitle}>Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</div>
      <div className={styles.servicesMain}>
        <div className={styles.servicesMainCard}>
          <div className={styles.titleSection}>
            <img src="./ux-design.png" />
          </div>
          <div className={styles.cardTitle}>Branding</div>
          <div className={styles.cardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </div>
        </div>
        <div className={styles.servicesMainCard}>
          <div className={styles.titleSection}>
            <img src="./coding.png" />
          </div>
          <div className={styles.cardTitle}>Branding</div>
          <div className={styles.cardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </div>
        </div>
        <div className={styles.servicesMainCard}>
          <div className={styles.titleSection}>
            <img src="./network.png" />
          </div>
          <div className={styles.cardTitle}>Networkin</div>
          <div className={styles.cardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </div>
        </div>
        <div className={styles.servicesMainCard}>
          <div className={styles.titleSection}>
            <img src="./ux-design.png" />
          </div>
          <div className={styles.cardTitle}>Branding</div>
          <div className={styles.cardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </div>
        </div>
        <div className={styles.servicesMainCard}>
          <div className={styles.titleSection}>
            <img src="./coding.png" />
          </div>
          <div className={styles.cardTitle}>Branding</div>
          <div className={styles.cardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
          </div>
        </div>
        <div className={styles.servicesMainCard}>
          <div className={styles.titleSection}>
            <img src="./network.png" />
          </div>
          <div className={styles.cardTitle}>Networkin</div>
          <div className={styles.cardBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
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
