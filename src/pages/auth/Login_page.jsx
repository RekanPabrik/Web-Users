import React from "react";
import logoRekanPabrik from "/assets/logoRekanPabrik.png";

function Login_page() {
  return (
    <>
      <div className="flex justify-center flex-col items-center mt-[150px]">
        <div className="text-center justify-center">
          <h1 className="text-[#a86108] text-[40px] mb-0 font-bold">
            Wellcome
          </h1>
          <h2 className="font-normal text-[#828282] m-0 text-[30px]">
            log in to your account to continue
          </h2>
        </div>
        <div className="flex justify-center">
          <img src={logoRekanPabrik} alt="logo rekan pabrik" />
        </div>
        <form
          action="#"
          method="#"
          className="flex flex-col gap-5 items-center"
        >
          <div>
            <input
              className="w-[300px] h-[30px] text-[15px] border rounded-[5px] border-solid border-gray-500"
              type="email"
              value=""
              name="email"
              id="emailUser"
              placeholder="your-email.com"
              required
            />
          </div>
          <div class="passInput">
            <input
              className="w-[300px] h-[30px] text-[15px] border rounded-[5px] border-solid border-gray-500"
              type="password"
              value=""
              name="password"
              id="passUser"
              placeholder="your-password"
              required
            />
            <div className="flex justify-end w-[100%]">
              <a href="">
                <p className="hover:text-blue-700">Reset password</p>
              </a>
            </div>
          </div>
          <div className="flex gap-[50px] items-center justify-center">
            <button
              className="w-[200px] h-[30px] text-[white] bg-[#a86108] font-semibold cursor-pointer rounded-[5px] border-[none]"
              type="submit"
            >
              login
            </button>
          </div>
        </form>
        <div className="mt-5">
          <div className="w-[350px] text-center">
            <p className=" text-[#828282]">
              Don't have an account?
              <span className="opacity-[100%] text-[black]">
                {" "}
                <a
                  href="#"
                  className="underline capitalize text-[black] mt-5 hover:text-[#a86108] hover:transition-[0.1s] hover:duration-[ease-out] hover:mt-5"
                >
                  Sign Up Now
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login_page;
