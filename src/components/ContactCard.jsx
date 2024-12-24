import React from "react";

const ContactCard = ({ Icon, type, value }) => {
  return (
    <div className="h-80 shadow-xl rounded-md contact-card">
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-2">
        <Icon className="text-8xl text-blue-500" />
        <h2 className="text-2xl font-semibold">{type}</h2>
      </div>
      <div className="w-full h-1/2 text-xl flex justify-center items-center">
        <p className="text-center text-gray-500 font-medium">{value}</p>
      </div>
    </div>
  );
};

export default ContactCard;
