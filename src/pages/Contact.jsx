import { useEffect } from "react";
import ContactCard from "../components/ContactCard";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    if (window.innerWidth >= 768) {
      gsap.from(".contact-card", {
        y: 100,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
      });
    } else {
      gsap.from(".contact-card", {
        x: 100,
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
      });
    }
  }, []);
  return (
    <div className="max-w-[1400px] w-[90%] mx-auto">
      <h1 className="mt-32 text-center md:text-6xl text-4xl font-bold">
        Contact Me
      </h1>
      <p className="text-center my-10 text-gray-500 text-lg">
        If you have any question or query so you are free to get in touch with
        me
      </p>
      <div className="md:gap-6 gap-16 my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 overflow-hidden">
        <ContactCard
          Icon={FaLocationDot}
          type="Address"
          value={"Shah Latif Town Sector 20B , Karachi"}
        />
        <ContactCard Icon={FaPhoneAlt} type="Phone" value={"+923162394940"} />
        <ContactCard
          Icon={MdEmail}
          type="Email Address"
          value={"moosarahil13@gmail.com"}
        />
        <ContactCard
          Icon={BsGlobe2}
          type="Website"
          value={"moosaraheel.netlify.app"}
        />
      </div>
    </div>
  );
};

export default Contact;
