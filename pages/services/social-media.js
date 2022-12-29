import Head from "next/head";
import React, { useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Service.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../components/Footer/Footer";

function SocialMedia() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const myRef = useRef(null);

  const executeScroll = () =>
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&family=Montserrat:wght@300;400;500;900&family=Poppins&family=Roboto+Slab:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <div className={styles.bannerServicesS}>
        <div className={styles.bannerCover}></div>
        <div
          className={styles.bannerText}
          data-aos="flip-left"
          data-aos-duration="1500"
        >
          Social Media
        </div>
        <div className={styles.arrowDown} onClick={() => executeScroll()}>
          <img src="/arrow-services.png" />
        </div>
      </div>
      <div className={styles.contentBreak} ref={myRef}></div>
      <div className={styles.servicesDescribed}>
        <div>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Your Brand
          </h1>
          <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            A company’s branding can often be a deciding factor for consumers.
            As a branding agency it is our job to tell your story through
            instantly recognisable logos or brandmarks, subsequently tailoring
            all marketing collateral to your brand’s core values. Whether it be
            establishing your key messaging and what you represent as a
            business, or rebranding ageing logo designs and collateral, we
            believe in the following steps that are critical to the creation of
            a brand that you can be proud of!
          </p>
        </div>
        <div>
          <img src="/idea.png" />
        </div>
      </div>
      <div className={styles.brandingProcess}>
        <h1>Our Branding Process.</h1>
        <p>Social media influences society…and consumers</p>
        <ul className={styles.brandingList}>
          <div>
            <span>1.</span>Branding Brief
            <p>
              The first step is to have a briefing meeting to discuss what is
              required. You will meet with a creative consultant and a designer
              so that we can get a better idea of the direction you would like
              to take with your branding. It does not matter if you do not have
              any design in mind – or even a basic colour theme, this meeting is
              designed so that we can get a feel of what you are trying to
              achieve with your company/branding.
            </p>
          </div>
          <div>
            <span>2.</span>Client Vision
            <p>
              Our branding is created not only to look awesome but also to
              represent what you offer as closely as possible, whether that be a
              product, service or even simply an idea. As a result, if you don’t
              have any design direction in mind, we can glean enough information
              through discussing your business’ culture, processes, client base
              and aims.
            </p>
          </div>
          <div>
            <span>3.</span>Consultancy
            <p>
              We offer objective advice in all aspects of our work, including
              our branding processes. It is our role as branding consultants to
              create the best brand for our clients, according to their
              requirements. As a result, at points this involves both accepting
              a client’s direction and also educating a client as to why a
              certain direction might not be the best fit for their business!
              The client always has final say, but where necessary we will
              fulfil our role as branding consultants.
            </p>
          </div>
          <div>
            <span>4.</span>Concepts & Directions
            <p>
              Great branding is a process, not an instant result. After we have
              had a briefing meeting and performed industry and competitor
              research we will then create initial direction concepts. The feel
              of each concept may vary dramatically (depending on the briefing
              meeting) but this is a necessary step. The concepts are created to
              identify a design direction which can then be refined, rather than
              a finished product (although this has happened before!).
            </p>
          </div>
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default SocialMedia;
