import React, { useState } from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"

function Navbar() {
  const [setOpen, setMenuOpen] = useState(false);
  return (
    <div className={styles.navMain}>
        <div className={styles.navLogo}>
          <Link href="/"><img src="./logo.png" alt="logo"/></Link>
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
                <li><Link href="/" >Home <div className={styles.underline}></div></Link></li>
                <li><Link href="/">Services<div className={styles.underline}></div></Link></li>
                <li><Link href="/">Our Work<div className={styles.underline}></div></Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar