import React from 'react'
import styles from "./Projects.module.css"

function Projects() {
  return (
    <div className={styles.projectsMain} id="projects">
      
     
        <h1 className={styles.title} >Recent Projects<div className={styles.underline}></div></h1>
        <div className={styles.subtitle}>Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.fancy_button_container}>
              <img src="/more.png"/>
            </div>
            <div className={styles.image_container}>
            <img src="https://nkdigitalsolutions.com/wp-content/uploads/2021/08/Wellness-@-The-Clinic.png"/>
            </div>
            <div className={styles.text_container}></div>
          </div>
          <div className={styles.card}>

          </div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
    </div>
  )
}

export default Projects