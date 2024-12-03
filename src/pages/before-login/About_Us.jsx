import React from "react";
import logoRekanPabrik from "/public/assets/logoRekanPabrik.png"

function About_Us() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-[#ecca9c] mt-[100px] justify-center text-[#a86108]">
        <div className="flex flex-row-reverse items-center justify-center h-[600px] gap-[300px]">
          <img
            src={logoRekanPabrik}
            alt=""
            className="h-[400px]"
          />
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
    </>
  );
}

export default About_Us;
