import "./Contact.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
//import swal from "sweetalert";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_qs5a4pc",
        "template_kspm9mp",
        form.current,
        "ABsZWmVrop38kHvOc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="contact__heading">Contact </h2>
        <h3 className="contact__sub-heading">
          Do you want to chat? Get in touch!
        </h3>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input className="contact__submit" type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
