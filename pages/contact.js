import React from 'react'
import Contact from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import styles from "../styles/Contact.module.css"

function contact() {
  return (
    <div>
        <Navbar/>
        <div className={styles.main}>
            <Contact/>
        </div>
    </div>
  )
}

export default contact