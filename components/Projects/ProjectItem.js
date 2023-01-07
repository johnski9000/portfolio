import React from 'react'
import styles from "./Projects.module.css"

function ProjectItem({card}) {
  return (
    <div className={styles.card}>
        
            <div className={styles.fancy_button_container}>
              <img src="/more.png"/>
            </div>
            <div className={styles.image_container}>
            <img src={card.image}/>
            </div>
            <div className={styles.text_container}></div>
            <div id={styles.text}>{card.text}</div>
    </div>
  )
}

export default ProjectItem