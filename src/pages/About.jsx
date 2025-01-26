import { useEffect, useRef } from "react";
import gsap from "gsap";
import Helmet from "react-helmet";

const About = () => {
  const about = useRef();
  useEffect(() => {
    // Animation for Mobile
    if (window.innerWidth <= 768) {
      gsap.from(about.current, {
        x: -50,
        duration: 0.5,
        opacity: 0,
      });
    }

    //Animation for Desktop
    if (window.innerWidth > 768) {
      gsap.from(".left", {
        x: -500,
        duration: 0.5,
        opacity: 0,
      });
      gsap.from(".right", {
        x: 500,
        duration: 0.5,
        opacity: 0,
      });
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Moosa Raheel - A full stack web developer - About Page</title>
      </Helmet>
      <div
        className="max-w-[1400px] w-[90%] mx-auto md:mt-32 flex gap-5 about-wrapper"
        ref={about}
      >
        <div className="w-1/2  bg-blue-500 hidden md:block left"></div>
        <div className="md:w-1/2 right">
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
