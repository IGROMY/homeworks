import React from 'react';
import styles from "./Connection.module.scss";
import Button from "../../ui/button/Button.jsx";
import Input from "../../ui/input/Input.jsx";
import TextArea from "../../ui/textArea/TextArea.jsx";
import Title from "../../ui/title/Title.jsx";
const Connection = () => {
    return (

    <section className={styles.connection}>

        <form>
          <Title text="Обращайтесь по любым вопросам"/>

          <Input label="Full name" type="text" placeholder="Full Name (required)" />
          <Input label="Email" type="email" placeholder="Your Email (required)" />
          <TextArea label="Your message" placeholder="Enter your message" />
            <div className={styles.button_connection}>
                <Button text="Send"/>
            </div>
        </form>

    </section>

        );
    };

    export default Connection;
