import React, { useRef, useState } from "react";
import "./contact.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { studiofigura, IBPM, OSKAR, LaboPrint } from '../../assets/company'
import LinkedinIcon from "../../assets/linkedin.png";
import GithubIcon from "../../assets/github.png";
import emailjs from "@emailjs/browser";
import { experiences } from "../../constants/json.js";

const Contact = () => {
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date="August 2021 - November 2021"
    iconStyle={{ background: "#383E56" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={studiofigura}
          alt="Studio Figura"
          className="w-[60%] h-[60] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {"Intern in the IT Department"}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        "Studio Figura International "
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {(point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      )}
    </ul>
  </VerticalTimelineElement>;
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const nameInput = form.current.querySelector(".name");
    const emailINput = form.current.querySelector(".email");
    const msgTextArea = form.current.querySelector(".msg");

    if (
      nameInput.value.trim() === "" ||
      emailINput.value.trim() === "" ||
      msgTextArea.value.trim() === ""
    ) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    setErrorMessage("");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          //   console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <Contact key={index} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="links">
            <a
              href="https://www.linkedin.com/in/arkadiusz-piaszczy%C5%84ski-a2b81019b/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedinIcon} alt="Linkedin Icon" className="link" />
            </a>
            <a
              href="https://github.com/Hurado"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img src={GithubIcon} alt="Github Icon" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
