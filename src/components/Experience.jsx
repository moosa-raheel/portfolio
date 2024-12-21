import React from "react";

const Experience = ({ year, title, desc }) => {
  return (
    <>
      <div className="mb-10">
        <div className="flex">
          <div className="w-[20%] flex justify-center">
            <div className="md:w-[3rem] md:h-[3rem] w-[2.5rem] h-[2.5rem] rounded-full bg-blue-600 p-1">
              <img
                src="/img/clock.png"
                alt=""
                className="w-full h-full "
                style={{ filter: "invert(1)" }}
              />
            </div>
          </div>
          <div className="w-[80%]">
            <h4 className="text-blue-600 md:text-xl font-medium">{year}</h4>
            <h3 className="font-bold md:text-2xl text-xl my-3">{title}</h3>
            <p className="text-gray-400">{desc}</p>
          </div>
        </div>
        <div className="line w-full h-[1px] bg-gray-400 mt-5"></div>
      </div>
    </>
  );
};

export default Experience;
