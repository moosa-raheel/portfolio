import { useEffect, useState } from "react";
import ContactCard from "../components/ContactCard";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGlobe2 } from "react-icons/bs";
import ContactForm from "../components/ContactForm";
import gsap from "gsap";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Helmet>
        <title>Moosa Raheel - A full stack web developer - Contact Page</title>
      </Helmet>
      <div className="max-w-[1400px] w-[90%] mx-auto">
        <h1 className="mt-32 text-center md:text-6xl text-4xl font-bold">
          Contact Me
        </h1>
        <p className="text-center my-10 text-gray-500 text-lg">
          If you have any question or query so you are free to get in touch with
          me
        </p>
        <div className="md:gap-6 gap-16 my-24 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 overflow-hidden py-10">
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
        <div className="form-container flex  mt-24 my-10 flex-wrap md:flex-nowrap bg-gray-100  rounded-xl">
          <div className="img md:w-1/2 w-full bg-blue-500 h-96 md:h-auto order-2 md:order-1 "></div>
          <div className="form md:w-1/2 w-full order-1 md:order-2 px-10 py-10 ">
            <ContactForm
              formData={formData}
              handleFormData={handleFormData}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
