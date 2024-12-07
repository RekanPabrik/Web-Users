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
          <h2 className="font-bold text-[30px] text-center">
            We’re Here to Help You!
          </h2>
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
      <div className="flex flex-col mt-[100px] items-center">
        <form id="formContact">
          <div className="flex justify-between">
            <div>
              <label for="fname" className="text-[20px] font-[500]">First name:</label>
              <div className="m-[10px]"></div>
              <input type="text" id="fname" name="fname" className="w-[224px] h-[40px] rounded-[8px] border-2 border-[#ccc]"/>
              <span class="error" id="FnameError"></span>
            </div>
            <div>
              <label for="lname" className="text-[20px] font-[500]">Last name:</label>
              <div className="m-[10px]"></div>
              <input type="text" id="lname" name="lname"  className="w-[224px] h-[40px] rounded-[8px] border-2 border-[#ccc]"/>
              <span class="error" id="LnameError"></span>
            </div>
          </div>
          <div className="mt-[15px]">
            <label for="email" className="text-[20px] font-[500]">email:</label>
            <div className="m-[10px]"></div>
            <input type="email" name="email" id="email" className="w-[515px] h-[40px] rounded-[8px] border-2 border-[#ccc]"/>
            <span class="error" id="emailError"></span>
          </div>
          <div className="mt-[15px]">
            <label for="number"  className="text-[20px] font-[500]">number:</label>
            <div className="m-[10px]"></div>
            <input type="text" name="number" id="number" className="w-[515px] h-[40px] rounded-[8px] border-2 border-[#ccc]"/>
            <span class="error" id="numberError"></span>
          </div>
          <div className="mt-[15px]">
            <label for="number"  className="text-[20px] font-[500]">message:</label>
            <div className="m-[10px]"></div>
            <textarea name="massage" id="message" className="w-[515px] h-[200px] rounded-[8px] border-2 border-[#ccc]"></textarea>
            <span class="error" id="messageError"></span>
          </div>
          <button type="submit" className="w-[116px] h-[37px] text-xl text-[white] bg-[#a86108] cursor-pointer mt-5 rounded-[10px] border-[transparent]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact_Us;
