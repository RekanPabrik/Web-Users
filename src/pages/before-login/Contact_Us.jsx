import React from "react";
import CardSwiper from "../../components/CardSwipper";

function Contact_Us() {
  return (
    <>
      <div className="w-[100%] h-[100%] bg-[#ecca9c] mt-[100px] justify-center text-[#a86108]">
        <h1 className="font-bold text-[60px] text-center pt-[40px]">
          Contact our team
        </h1>
        <div className="text-center flex items-center">
          <CardSwiper />
        </div>
        <div className="flex flex-col items-center p-[30px]">
          <h2 className="font-bold text-[30px] text-center">We’re Here to Help You!</h2>
          <p className="w-[900px] text-[20px] m-[0px] text-center">
            If you have any questions, feedback, or need assistance while using
            the Rekan Pabrik app, please don’t hesitate to reach out to our
            dedicated support team. We’re here to help you get the most out of
            our app, ensuring a smooth and productive experience.Our team is
            ready to assist you with any inquiries, technical issues, or general
            information you might need. Thank you for choosing Rekan
            Pabrik—we’re here to support you every step of the way!
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact_Us;
