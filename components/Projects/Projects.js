import React from 'react'
import styles from "./Projects.module.css"

function Projects() {
  return (
    <div className={styles.projectsMain}>
     
        <h1 className={styles.title}>Recent Projects<div className={styles.underline}></div></h1>
        <div className={styles.subtitle}>Consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices</div>
        <div className={styles.cardContainer}>
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