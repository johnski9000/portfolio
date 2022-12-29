import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"
import { useRouter } from 'next/router'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';


function Navbar() {
  const router = useRouter()
  const [setOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const servicesCookie = getCookie('services').toString();
    if (servicesCookie === "true") {
      setCookie('services', '');
      setTimeout(function() {
        document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start" });

    }, 500)
    }
  }, [])
  

  function goToServices(e) {
    e.preventDefault();
    if (window.location.pathname === "/") {
      document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setCookie('services', 'true');
      router.push("/")
    }
  }

  return (
    <div className={styles.navMain}>
        <div className={styles.navLogo}>
          <Link href="/"><img src={"../logo.png"} alt="logo"/></Link>
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
                <li><Link href="/" onClick={goToServices}>Services<div className={styles.underline}></div></Link></li>
                <li><Link href="/">Our Work<div className={styles.underline}></div></Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar