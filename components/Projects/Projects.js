import Head from 'next/head'
import React, { useEffect } from 'react'
import ProjectItem from './ProjectItem'
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Projects.module.css"

function Projects() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className={styles.projectsMain} id="projects">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&family=Montserrat:wght@300;400;500;900&family=Poppins&family=Roboto+Slab:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
     
        <h1 className={styles.title} data-aos="fade-up"
        data-aos-duration="800">Recent Projects<div className={styles.underline}></div></h1>
        <div className={styles.cardContainer}  data-aos="fade-up"
        data-aos-duration="800">
          <ProjectItem card={{
            image:"https://nkdigitalsolutions.com/wp-content/uploads/2021/08/Wellness-@-The-Clinic.png",
            text:"Brochure Website"
          }}
          />
          <ProjectItem card={{
            image:"/hipstore.png",
            text:"Ecommerce Website"
          }}/>
          <ProjectItem card={{
            image:"jobhack.png",
            text:"Recruitment App"
          }}/>
          <ProjectItem card={{
            image:"colmar.png",
            text:"Brochure Website"
          }}/>
          <ProjectItem card={{
            image:"wellgosh.png",
            text:"Eccommerce Website"
          }}/>
          <ProjectItem card={{
            image:"https://nkdigitalsolutions.com/wp-content/uploads/2021/08/United-Building-Services.png",
            text:"Trade Website"
          }}/>
          <ProjectItem card={{
            image:"https://nkdigitalsolutions.com/wp-content/uploads/2021/08/The-CV-Checkers.png",
            text:"Brochure Website"
          }}/>
          <ProjectItem card={{
            image:"oipolloi.png",
            text:"Eccommerce Website"
          }}/>
        </div>
    </div>
  )
}

export default Projects