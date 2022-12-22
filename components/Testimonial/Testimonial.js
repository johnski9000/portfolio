import React from "react";
import styles from "./Testimonial.module.css";

function Testimonial() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.quoteImg}></div>
      <div className={styles.mainText}>
        We’re really pleased with the look of our new website. Not only have
        they created a visually pleasing online presence to reflect our unique
        store, they have given us a strong foundation to build on, allowing us
        to continue to develop our ecommerce strategy."
      </div>
      <div className={styles.author}>Kate Spiers, Manager</div>
      <div className={styles.company}>Burford Garden Company</div>
        
    </div>
  );
}

export default Testimonial;
