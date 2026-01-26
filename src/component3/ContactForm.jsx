import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contactForm.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("myzrkrga");

  if (state.succeeded) {
    return <p className="success-message">Thank you!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Me</h2>

       <label htmlFor="email">Your Name</label>
      <input
        id="name"
        type="name"
        name="name"
        placeholder="timmy.....!"
        required
      />
      <ValidationError prefix="name" field="name" errors={state.errors} />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="you@example.com"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Write something "
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}

export default ContactForm;
