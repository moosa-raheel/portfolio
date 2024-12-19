import React from "react";

const About = () => {
  return (
    <>
      <div className="max-w-[1400px] w-[90%] mx-auto md:mt-32 flex gap-5">
        <div className="w-1/2  bg-blue-500 hidden md:block"></div>
        <div className="md:w-1/2">
          <div>
            <h1 className="mt-20 font-bold text-3xl md:text-6xl">About Me</h1>
            <p className="text-gray-400  mt-4 md:mt-10">
              I am passionate about Tech and always eager to learn and grow.
              With Programming and modern technology, I strive to make a
              positive impact and deliver quality results in everything I do.
            </p>
          </div>
          <div className="flex gap-3 mt-8 md:mt-10 md:pb-20">
            <div className="flex flex-col gap-3 font-semibold md:gap-7 text-sm lg:text-lg">
              <p>Name :</p>
              <p>Date of birth :</p>
              <p>Marital Status :</p>
              <p>Zip Code :</p>
              <p>Email :</p>
              <p>Phone :</p>
            </div>
            <div className="flex flex-col gap-3 text-gray-400 md:gap-7 text-sm lg:text-lg">
              <p>Moosa Raheel</p>
              <p>September 19, 2005</p>
              <p>Single</p>
              <p>75050</p>
              <p>moosarahil13@gmail.com</p>
              <p>+923162394940</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
