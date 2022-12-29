import React, { useEffect } from 'react'
import styles from "./Footer.module.css"
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contactMeBox} data-aos="fade-up" data-aos-duration="1000">
            <h1>Get in touch</h1>
            <div>Interested in working together?</div>
            <div><button className={styles.button}>Let's do this</button></div>
        </div>
    </div>
  )
}

export default Footer