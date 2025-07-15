import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaVuejs,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { TbBrandJavascript, TbBrandTypescript } from "react-icons/tb";
import portfolioImage from "../../assets/img_two.jpg";
import { aboutMeText } from "../../textContent";
import "./about.css";

const icons = [
  { icon: FaHtml5, text: "HTML" },
  { icon: FaCss3Alt, text: "CSS" },
  { icon: FaSass, text: "Sass" },
  { icon: TbBrandJavascript, text: "JavaScript" },
  { icon: TbBrandTypescript, text: "TypeScript" },
  { icon: FaNodeJs, text: "NodeJS" },
  { icon: FaVuejs, text: "Vue" },
  { icon: FaReact, text: "React" },
];

export default function About() {
  return (
    <section className="About p-4 lg:px-0 lg:py-8 rounded-lg " id="about">
      <div className="md:flex gap-8 w-[90%] xl:w-[75%] mx-auto">
        <div className="lg:flex-3">
          <img
            src={portfolioImage}
            alt="avatar image"
            className="about-me-image w-full rounded-lg "
          />
        </div>
        <div className="mt-4 leading-[1.5] lg:flex-4 relative">
          <div>
            <span className="border-b border-accent lg:text-[2rem] text-[1.5rem]">
              Who am I?
            </span>
            <p className="mt-4 lg:mt-12 text-base font-light">
              {aboutMeText.paragraphOne}
              <span className="line-through italic">crushing</span>
              {aboutMeText.paragraphOneII}
              <br />
              <br />
              {aboutMeText.paragraphTwo}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-[1rem] gap-y-[1.5rem] mt-[1.5rem] lg:absolute lg:bottom-0">
            {icons.map(({ icon: Icon, text }) => (
              <div className="icon-wrapper" key={text}>
                <Icon className="icon" />
                <p className="icon-text mt-4">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
