import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdLocalPhone } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  const byCallBtn = () => {
    console.log("Via Call Button got clicked...");
  };

  const byEmailFormBtn = () => {
    console.log("Via Email Form Button got clicked...");
  };

  const bySupportChatBtn = () => {
    console.log("Via Support Chat Button got clicked...");
  };

  const [name, setName] = useState("rajendra");
  const [email, setEmail] = useState("thaparajendra1@gmail.com");
  const [comment, setComment] = useState("Welcome Guys !!!");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setComment(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_buttons}>
          <Button
            text="VIA CALL"
            icon={<MdLocalPhone fontSize="24px" />}
            onClick={byCallBtn}
          />
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
            onClick={bySupportChatBtn}
          />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
          onClick={byEmailFormBtn}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">E-Mail</label>
            <input type="email" name="" id="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="comment">Comment</label>
            <textarea name="" id="comment" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="Submit" />
          </div>
        </form>

        <div style={{ background: "orange" }}>
          <h2
            style={{
              color: "red",
              background: "black",
              padding: "5px 10px",
            }}
          >
            Entered Data
          </h2>
          {name} <br></br>
          {email}
          <br></br>
          {comment}
        </div>
      </div>

      <div className={styles.contact_image}>
        <img src="images/Contact-Image.svg" alt="contact image" />
      </div>
    </section>
  );
}

export default ContactForm;
