import React from 'react'
import styles from "./Footer.module.css"

function Footer() {
  return (
    <div className={styles.mainContainer}>
        <div className={styles.contactMeBox}>
            <h1>Get in touch</h1>
            <div>Interested in working together?</div>
            <div><button className={styles.button}>Let's do this</button></div>
        </div>
    </div>
  )
}

export default Footer