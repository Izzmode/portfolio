import { experienceCardText, educationCardText } from "../../textContent";
import ResumeCard from "./ResumeCard";
import "./resume.css";

export default function Resume() {
  return (
    <section className="Resume pt-16 w-full" id="resume">
      <div className="text-[1.5rem] flex flex-col items-center mb-8 lg:mb-12 lg:items-start lg:flex-row lg:gap-3 lg:justify-center lg:text-[2rem]">
        Experience
        <h2 className="text-accent">&</h2>
        Education
      </div>
      <div className="flex gap-12 flex-col">
        <div className="resume-experience flex-1">
          <h3>Experience</h3>
          {experienceCardText
            .sort((a, b) => a.order - b.order)
            .map((obj) => (
              <>
                <ResumeCard
                  title={obj.title}
                  subtitle={obj.subtitle}
                  content={obj.content}
                />
              </>
            ))}
        </div>
        <div className="resume-education flex-1">
          <h3>Education</h3>
          {educationCardText
            .sort((a, b) => a.order - b.order)
            .map((obj) => (
              <>
                <ResumeCard
                  title={obj.title}
                  subtitle={obj.subtitle}
                  content={obj.content}
                  education={true}
                />
              </>
            ))}
        </div>
      </div>
    </section>
  );
}
