import React, { useEffect } from 'react'
import styles from "./Footer.module.css"
import AOS from "aos";
import "aos/dist/aos.css";
import Link from 'next/link';

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className={styles.mainContainer} 
    // data-aos="fade-up" data-aos-duration="1000"
    >
      <h1 className={styles.getInTouch}>Interested in working together?</h1>
        <div className={styles.contactMeBox} >
            <h1>Get in touch</h1>
            <div>
            <Link href="/contact">
            <button className={styles.button}>Let's do this</button>
              </Link></div>
        </div>
    </div>
  )
}

export default Footer