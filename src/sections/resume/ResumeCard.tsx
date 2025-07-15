import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

interface ResumeCardProps {
  title: string;
  subtitle: string;
  content: string;
  education?: boolean;
}

export default function ResumeCard({
  title,
  subtitle,
  content,
  education,
}: ResumeCardProps) {
  return (
    <div className="ResumeCard h-[130px] flex items-center relative border-t border-accent">
      <div className={`icon icon-margin ${!education && "icon-briefcase"}`}>
        {education ? (
          <FaGraduationCap />
        ) : (
          <FaBriefcase className="text-[1.7rem]" />
        )}
      </div>
      <div className="card-content ml-[1.5rem]">
        <h2 className="font-medium lg:text-[1.5rem]">{title}</h2>
        <h3 className="text-[0.9rem] lg:text-[1rem]">{subtitle}</h3>
        <p className="text-[0.8rem] lg:text-[0.9rem]">{content}</p>
      </div>
    </div>
  );
}
