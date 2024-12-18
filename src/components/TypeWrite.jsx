import Typewriter from "typewriter-effect";

const TypeWrite = () => {
  return (
    <>
      <h3 className="sm:text-3xl text-2xl font-bold mt-5 flex justify-center items-center gap-2 lg:text-4xl lg:mt-8 flex-wrap">
        <span>He is a </span>
        <Typewriter
          options={{
            strings: [
              "Frontend Developer",
              "Backend Developer",
              "Full Stack  Developer",
              "Programmer",
              "Developer",
              "Teacher",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "type text-blue-500",
          }}
        />
      </h3>
    </>
  );
};

export default TypeWrite;
