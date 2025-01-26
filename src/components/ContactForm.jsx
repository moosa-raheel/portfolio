import React from "react";

const ContactForm = ({ formData, handleFormData }) => {
  const sendEmail = async (e) => {
    e.preventDefault();
    const url = "https://emailapi-production-ed35.up.railway.app/sendmail";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from_email: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={sendEmail} method="POST">
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
