//// contact us kısmı burada yazılır
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.scss"
import Card from '../../components/card/Card'
import { FaEnvelope, FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import {GoLocation} from "react-icons/go"
import { toast } from 'react-toastify';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_owmlxt9', form.current, 'WDa94XY9AVIC3NXwo',
      )
      .then(
        () => {
          toast.success("Message send successfully")
        },
        (error) => {
          toast.error(error.text)
        },
      );
      e.target.reset()
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name:</label>
              <input type='text' name='user_name' placeholder='Full name' required/>
              <label>Email:</label>
              <input type='email' name='user_email' placeholder='Your active email' required/>
              <label>Subject</label>
              <input type='text' name='subject' required placeholder='Subject' />
              <label>Your Message</label>
              <textarea name='message' cols="30" rows="10" required/>
              <button type='submit' className='--btn --btn-primary'>Send Message</button>
            </Card>
          </form>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt/>
                  <p>0 555 555 55 55</p>
                </span>
                <span>
                  <FaEnvelope/>
                  <p>support@eshop.com</p>
                </span>
                <span>
                  <GoLocation/>
                  <p>Trabzon/Turkey</p>
                </span>
                <span>
                  <FaTwitter/>
                  <p>@eshop</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact