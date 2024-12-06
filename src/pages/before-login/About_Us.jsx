import React from "react";
import logoRekanPabrik from "/assets/logoRekanPabrik.png";
import zeroSectionIMG04 from "/assets/zeroSectionIMG-04.png";

function About_Us() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-[#ecca9c] mt-[100px] justify-center text-[#a86108]">
        <div className="flex flex-row-reverse items-center justify-center h-[600px] gap-[300px]">
          <img src={logoRekanPabrik} alt="" className="h-[400px]" />
          <div>
            <h1 className="font-[500] text-[50px] w-[500px]">
              About <span>RekanPabrik</span>
            </h1>
            <p className="w-[600px] text-[20px]">
              At Factory Partners, we believe that every individual has great
              potential to thrive in the world of work. As a platform that
              focuses on the industrial and manufacturing sectors, we are here
              to bridge job seekers with leading companies in this field.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[100px] text-center capitalize">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-[40px] font-bold mb-[15px]">our mission</h1>
          <p className="w-[900px] text-[24px] m-0 text-[#828282]">
            We aim to be the best partner for job seekers and companies. By
            providing access to relevant job vacancies and helping companies
            find quality talent, Factory Associates is committed to building a
            strong and sustainable employment ecosystem.
          </p>
        </div>
      </div>

      <div className="mt-[100px] flex flex-row justify-center items-center">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[40px] font-bold mb-[15px]">
            Why Factory Partners?
          </h2>
          <ul>
            <li className="w-[900px] text-[24px] m-0 text-[#828282]">
              Industry Specific: Our focus on the manufacturing and industrial
              sectors ensures you find the most relevant vacancies.
            </li>
            <li className="w-[900px] text-[24px] m-0 text-[#828282]">
              Partnerships with Leading Companies: We work with major companies
              to provide the best job opportunities.
            </li>
            <li className="w-[900px] text-[24px] m-0 text-[#828282]">
              Easy & Fast Process: From search to application, the process is
              simple and fast, making it easy for you to take the next step in
              your career.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-[100px] flex justify-center">
        <div className="flex flex-row-reverse items-center gap-[100px]">
          <img src={zeroSectionIMG04} alt="" className="rounded-[8px]" />
          <div>
            <h1 className="text-[40px] font-bold w-[500px]">
              With Us, Achieve Your Best Career!
            </h1>
            <p className="text-[24px] font-[300] text-[#828282] w-[450px]">
              Join Factory Associates and find the career opportunity that's
              right for you. Let's grow and develop together in an industry that
              continues to develop.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_Us;
