import React, { useState } from 'react'
import styles from "./Navbar.module.css"

function Navbar() {
  const [setOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navMain}>
        <div className={styles.navLogo}>
            <img src="./logo.png" alt="logo"/>
            {/* JW Digital LTD */}
        </div>
        <div className={styles.middleNav}>

        </div>
        <div className={setOpen ? styles.mobileNavItemsActive : styles.mobileNavItemsInactive}>
          <div className={styles.mobileIconContainer} onClick={() => setMenuOpen(!setOpen)}>
            <div className={setOpen ? styles.activeMenuLine1 : styles.menuLine1}></div>
            <div className={setOpen ? styles.activeMenuLine2 : styles.menuLine2}></div>
            <div className={setOpen ? styles.activeMenuLine3 : styles.menuLine3}></div>
          </div>
        </div>
        <div className={styles.navItems}>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Our Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar