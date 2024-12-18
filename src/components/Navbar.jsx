import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 bg-black text-white w-full">
      <div
        className="flex justify-between items-center h-16 px-5
      "
      >
        <a href="" className="logo text-2xl font-bold">
          <span className="text-blue-400">M</span>.R
        </a>
        <div className="icon">
          <IoIosMenu className="text-2xl" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
