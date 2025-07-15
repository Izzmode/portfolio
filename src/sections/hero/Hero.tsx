import { CiLocationOn } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import aboutImage from "../../assets/avatar_9.png";
import "./hero.css";

export default function Hero() {
  return (
    <section
      className="Hero flex flex-col lg:flex-row-reverse lg:justify-between items-center h-screen w-full pt-[8rem]"
      id="home"
    >
      <div className="avatar-image-container relative">
        {/* <h2 className="absolute text-[9rem] text-center text-gray-200 opacity-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
          IZABELLE OLOFSSON
        </h2>{" "} */}
        <h2
          className="text-gray-400 opacity-30 text-xs tracking-widest text-center mb-2 lg:hidden"
          aria-label="Izabelle Olofsson"
        >
          IZABELLE OLOFSSON
        </h2>
        <div className="hover-box">
          <p>Image made with imagine.art</p>
        </div>
        <img src={aboutImage} alt="portfolio image" className="avatar-image" />
      </div>

      <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8">
        <div className="greeting-wrapper font-bold text-[3rem] hidden lg:flex">
          <h1 className="text-accent">Hello</h1>
          <h1>
            , I'm <span>Izabelle</span> .
          </h1>
        </div>

        <h2 className="mt-4 text-xl lg:mt-0 lg:text-[1.5rem] lg:font-bold">
          Front end developer
        </h2>
        <div className="flex items-center ">
          <p>Based in Stockholm</p>
          <span className="inline-flex items-center ml-[5px]">
            <CiLocationOn />
          </span>
        </div>
        <div className="mt-12 lg:mt-16 flex gap-4">
          <a
            href="https://www.linkedin.com/in/izabelle-olofsson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[3rem] lg:text-[2rem] text-icon" />
          </a>
          <a
            href="https://github.com/Izzmode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-[3rem] lg:text-[2rem] text-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
