import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <h5>If you want to discuss more in detail, please contact me</h5>
      </div>
      {/* <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form> */}
      <div className={"contact-me-main"}>
        <div title={"Gmail"}><a
          href="https://www.naveenkumarrnk2701@gmail.com"
          className="navbar--content"
          target="_blank"
          rel="noreferrer"
        ><BiLogoGmail className="social-media-icons" /></a>
        </div>
        <div title={"Whatsapp"}>
          <a
            href="https://www.whatsapp.com"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          ><SiWhatsapp className="social-media-icons" /></a></div>
        <div title={"Instagram"}>
          <a
            href="https://www.instagram.com/_rnk46_/?igsh=ZjF2cGp4YnBwbXc%3D"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          ><RiInstagramFill className="social-media-icons" /></a></div>
        <div title={"Linkedin"}>
          <a
            href="https://www.linkedin.com/in/naveenkumar2701"
            className="navbar--content"
            target="_blank"
            rel="noreferrer"
          ><BsLinkedin className="social-media-icons" />
          </a></div>
      </div>

    </section>
  );
}
