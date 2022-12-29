import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import styles from "./Navbar.module.css"
import { useRouter } from 'next/router'
import { deleteCookie, getCookie, setCookie } from 'cookies-next';


function Navbar() {
  const router = useRouter()
  const [setOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (getCookie('projects') === undefined) {
      return
    } else if (getCookie('projects').toString() === "true") {
       const projectsCookie = getCookie('projects').toString();
       setCookie('projects', '');
      setTimeout(function() {
        document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });

    }, 500)
    }


    if (getCookie('services') === undefined) {
      return
    } else if (getCookie('services').toString() === "true") {
    const servicesCookie = getCookie('services').toString();
       setCookie('services', '');
      setTimeout(function() {
        document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start" });

    }, 500)
    }
    // if (servicesCookie === "true") {
    //   setCookie('services', '');
    //   setTimeout(function() {
    //     document.getElementById("services").scrollIntoView({ behavior: "smooth", block: "start" });

    // }, 500)
    // }

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
  function goToProjects(e) {
    e.preventDefault();
    if (window.location.pathname === "/") {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setCookie('projects', 'true');
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
          <div className={styles.navItemsMobile}>
            <ul>
                <li><Link href="/" >Home <div className={styles.underline}></div></Link></li>
                <li><Link href="/" onClick={goToServices}>Services<div className={styles.underline}></div></Link></li>
                <li><Link href="/" onClick={goToProjects}>Our Work<div className={styles.underline}></div></Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
        </div>
        <div className={styles.navItems}>
            <ul>
                <li><Link href="/" >Home <div className={styles.underline}></div></Link></li>
                <li><Link href="/" onClick={goToServices}>Services<div className={styles.underline}></div></Link></li>
                <li><Link href="/" onClick={goToProjects}>Our Work<div className={styles.underline}></div></Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar