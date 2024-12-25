import React from "react";

const ContactForm = ({ formData, handleFormData }) => {
  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-400 py-3 px-5 my-3"
          value={formData.name}
          name="name"
          onChange={handleFormData}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-400 py-3 px-5 my-3"
          value={formData.email}
          name="email"
          onChange={handleFormData}
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full border border-gray-400 py-3 px-5 my-3"
          value={formData.subject}
          name="subject"
          onChange={handleFormData}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full border border-gray-400 py-3 px-5 my-3 h-48 resize-none"
          value={formData.message}
          name="message"
          onChange={handleFormData}
          required
        ></textarea>
        <button className="bg-blue-500 text-white py-4 px-10 flex justify-center items-center my-3 rounded-full">
          Send Message
        </button>
      </form>
    </>
  );
};

export default ContactForm;
