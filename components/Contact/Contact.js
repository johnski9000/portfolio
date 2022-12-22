import Head from "next/head";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendContactForm } from "../../lib/api";
import styles from "./Contact2.module.css";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    const response = await sendContactForm(data);
    console.log(response);
    if (response.status === 200) {
      console.log("true");
      setLoaded(true);
    } else {
      console.log("false");
    }
  };
  const onError = (errors, e) => console.log(errors, e);
  return (
    <div className={styles.formContainer}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,300;1,400;1,700&family=Montserrat:wght@300;400;500;900&family=Poppins:wght@200;400&family=Roboto+Slab:wght@300;400;500&display=swap"
          rel="stylesheet"
        />{" "}
      </Head>
      <div className={styles.greyScreen}></div>
      {/* <div className={styles.bannerImg}>
        <img src="./contactBanner.jpg" alt="banner"/>
      </div> */}
      <div className={styles.containerForm}>
        {!loaded ? (
          <div>
            <div className={styles.formTitleContainer}>
              <div>Love to hear from you,</div>
              <div>
                Get in touch <img src={"./waving-hand.png"} />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.formTitleContainer}>
              <div>
                We'll be in touch! 
                <img src="./thumb-up.png" />
              </div>
            </div>
          </div>
        )}

        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {!loaded ? (
            <>
              <div className={styles.formOptionContainer}>
                <input type="text" required {...register("Name")} />
                <span>Full Name</span>
              </div>
              <div className={styles.formOptionContainer}>
                <input type="text" required {...register("Email")} />
                <span>Email</span>
              </div>
              <div className={styles.formOptionContainer}>
                <input type="text" required {...register("Message")} />
                <span>Message</span>
              </div>
              <br />
              {!loading ? (
                <button className={styles.button}>
                  Just Send
                  {/* <img src={"./arrow.png"} /> */}
                </button>
              ) : (
                <button className={styles.buttonLoading}></button>
              )}
            </>
          ) : (
            <div className={styles.messageSuccess}>
              Message sent! 
              {/* <img src="./success.png" /> */}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
