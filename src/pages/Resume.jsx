import { useEffect, useRef, useState } from "react";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skill from "../components/Skill";
const Resume = () => {
  const educationRef = useRef();
  const experienceRef = useRef();
  const skillsRef = useRef();
  const [isIntersect, setIsintersect] = useState({
    education: false,
    experience: false,
    skills: false,
  });
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      entry.forEach((ent) => {
        if (ent.isIntersecting) {
          setIsintersect((prev) => {
            return { ...prev, [ent.target.id]: true };
          });
        } else {
          setIsintersect((prev) => {
            return { ...prev, [ent.target.id]: false };
          });
        }
      });
    });
    observer.observe(educationRef.current);
    observer.observe(experienceRef.current);
    observer.observe(skillsRef.current);
  }, []);
  return (
    <>
      <div className="mt-20 max-w-[1400px] w-[90%] mx-auto flex flex-col md:flex-row md:mt-28">
        <div className="menu md:w-1/4 md:flex md:justify-center relative">
          <ul className="font-bold md:text-xl flex flex-col gap-4 md:fixed md:top-64">
            <li>
              <a
                href="#education"
                className={`${isIntersect.education ? "text-blue-500" : ""}`}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className={`${isIntersect.experience ? "text-blue-500" : ""}`}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`${isIntersect.skills ? "text-blue-500" : ""}`}
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div className="content md:w-9/12">
          <div ref={educationRef} id="education">
            <h2 className="text-blue-500 font-bold text-3xl my-8 md:text-4xl md:my-10">
              Education
            </h2>
            <Education
              year="2020-2022"
              title="Matriculum from Karachi Board"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo ipsa sit tempora delectus, aspernatur quasi deserunt qui nemo dolores."
            />
            <Education
              year="2022-2024"
              title="Diploma in Associate Engineering (Continue)"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo ipsa sit tempora delectus, aspernatur quasi deserunt qui nemo dolores."
            />
          </div>
          <div ref={experienceRef} id="experience">
            <h2 className="text-blue-500 font-bold text-3xl my-8 md:text-4xl md:my-10">
              Experience
            </h2>
            <Experience
              year={"2022 - 2024"}
              title={"Python Developer"}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo ipsa sit tempora delectus, aspernatur quasi deserunt qui nemo dolores."
            />
            <Experience
              year={"2022 - 2024"}
              title={"JavaScript Developer"}
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo ipsa sit tempora delectus, aspernatur quasi deserunt qui nemo dolores."
            />
          </div>
          <div ref={skillsRef} id="skills">
            <h2 className="text-blue-500 font-bold text-3xl my-8 md:text-4xl md:my-10">
              Skills
            </h2>
            <Skill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
