import React from "react";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <footer className="flex flex-col w-full justify-center items-center pt-10 pb-20 bg-gray-400">
      <section>
        <article className="mb-10 text-2xl font-semibold">
          <h1>Contact Me</h1>
        </article>
      </section>
      <section className="flex flex-row w-full justify-evenly">
        <article className="flex flex-row w-1/2 justify-center items-center">
          <ContactForm />
        </article>
        <nav className="flex flex-row w-1/2 justify-center items-center">
          <ul className="flex flex-row justify-evenly w-full">
            <a
              href="https://danielmooreportfolio.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              My Portfolio
            </a>
            <li>
              <a
                href="https://github.com/wron1"
                target="_blank"
                rel="noreferrer noopener"
              >
                Github
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://linkedin.com/in/danielmoore201"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
