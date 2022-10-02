import React from "react";

function ContactForm() {
  return (
    <form
      id="contact-form"
      className="flex flex-col w-full items-center justify-center"
      action="https://formspree.io/f/xzbodobo"
      method="POST"
    >
      <article className="flex flex-col w-3/4 justify-center items-start">
        <h3>Email</h3>
        <input
          className="flex w-full"
          id="email-input"
          type="email"
          name="_replyto"
        />
      </article>
      <article className="flex flex-col w-3/4 items-start justify-start">
        <h3> Body</h3>
        <textarea
          className="flex w-full"
          id="body-input"
          name="body"
        ></textarea>
      </article>
      <article className="flex flex-col w-3/4 items-end justify-center">
        <input
          className="w-20 bg-slate-500 text-white mt-5"
          id="submit-input"
          type="submit"
          value="Send"
        />
      </article>
    </form>
  );
}

export default ContactForm;
