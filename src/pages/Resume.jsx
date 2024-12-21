import Education from "../components/Education";
import Experience from "../components/Experience";
const Resume = () => {
  return (
    <>
      <div className="mt-20 max-w-[1400px] w-[90%] mx-auto flex flex-col md:flex-row md:mt-28">
        <div className="menu md:w-1/4 md:flex md:justify-center md:items-center">
          <ul className="font-bold md:text-xl flex flex-col gap-4">
            <li>Education</li>
            <li>Experience</li>
            <li>Skills</li>
          </ul>
        </div>
        <div className="content md:w-9/12">
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
      </div>
    </>
  );
};

export default Resume;
