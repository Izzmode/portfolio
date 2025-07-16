import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import computerAvatar from "../../assets/working.png";
import "./contact.css";

export default function Contact() {
  return (
    <section className="Contact mt-[4rem] pb-8 w-full" id="contact">
      <div className="mb-8 md:mb-12 text-[1.5rem] md:text-[2rem]">
        <h2 className="text-center">
          Let's get in <span className="text-accent">touch</span>!
        </h2>
      </div>
      <div className="contact-wrapper flex flex-wrap items-center justify-center gap-[1.5rem] text-center">
        <div className="card-contact-wrapper flex-1">
          <div className="card-contact">
            <div>
              <a href="mailto:izabelleolofsson@live.se">
                <FaEnvelope className="icon" />
              </a>
            </div>
            <h3 className="mb-2">Email</h3>
            <p className="connect">
              <a href="mailto:izabelleolofsson@live.se">
                izabelleolofsson@live.se
              </a>
            </p>
          </div>
          <div className="card-contact">
            <div>
              <a
                href="https://www.linkedin.com/in/izabelle-olofsson/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </div>
            <div className="contact-info">
              <h3 className="mb-2">Linkedin</h3>
              <p className="connect">
                <a
                  href="https://www.linkedin.com/in/izabelle-olofsson/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="png-wrapper hidden md:flex md:flex-1 md:justify-end">
          <img
            src={computerAvatar}
            alt="Woman working on computer"
            className="computer-avatar h-[26.5rem] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
