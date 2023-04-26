import React from 'react';
import styles from "./Connection.module.scss";
const Connection = () => {
    return (

    <section className={styles.connection}>

        <form>
            <h2 className={styles.list_h2_connection}> Обращайтесь по любым вопросам </h2>
            <label className={styles.input_namePosition}>
                 <input className={styles.input_name_connection} type="text" placeholder="Full Name (required)"/>
            </label>
            <label className={styles.input_email_connection}>
                <input className={styles.input_email_connection} type="text" placeholder="Your Email (required)"/>
            </label>

            <p className={styles.message} text>Your Message</p>

            <label className={styles.input_messagePosition}>
                 <textarea className={styles.input_message}> </textarea>
            </label>

            <div className={styles.button_connection}>

            <button id="contactButton"></button>

            </div>
        </form>

    </section>

        );
    };

    export default Connection;
