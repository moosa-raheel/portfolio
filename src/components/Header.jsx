import { useNavigate } from "react-router-dom";
import TypeWrite from "./TypeWrite";
import { useEffect } from "react";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    gsap.from(".content", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full h-screen relative flex justify-center items-center">
        <div className="w-1/2 h-full bg-blue-100 absolute top-0 left-0 -z-10"></div>
        <div className="content text-center">
          <h2 className="sm:text-4xl text-2xl font-bold text-blue-500 lg:text-5xl">
            Meet
          </h2>
          <h1 className="sm:text-6xl text-3xl font-black mt-5 lg:text-8xl lg:mt-8">
            Moosa Raheel
          </h1>
          <TypeWrite />
          <button
            className="bg-blue-100 py-3 px-5 sm:text-xl text-sm mt-5 rounded-lg lg:mt-8 lg:text-2xl"
            onClick={() => {
              navigate("/about");
            }}
          >
            About Him
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
