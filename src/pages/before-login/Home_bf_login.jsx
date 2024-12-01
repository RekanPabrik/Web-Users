import React from "react";
import Navbar from "../../components/Navbar";
import zeroSectionImg from "../../../public/assets/zeroSectionIMG-01.png";
import zeroSectionImgDua from "../../../public/assets/zeroSectionIMG-02.png";
import Slider from "../../components/slider";

export default function Home_bf_login() {
  return (
    <>
      <Navbar />
      <div className="mt-[100px] w-[100%] h-[100vh] bg-[#ecca9c;] text-[#a86108] flex justify-center">
        <div className="flex flex-row-reverse justify-center items-center h-[600px] gap-[500px] ">
          <img
            src={zeroSectionImg}
            alt="zero section img"
            className="h-[400px]"
          />
          <div>
            <h1 className="font-[500] text-[60px] w-[500px]">
              Find Your Dream Job Easily
            </h1>
            <p className="w-[500px] text-[20px]">
              Are you a seasoned professional or just starting your career?
              We're here to help you find a job that suits your skills and
              interests. Browse thousands of job openings across a variety of
              industries and locations with just a few clicks.
            </p>
            <a href="#">
              <button className="btn mt-[30px] bg-[#a86108] text-white w-[130px] h-[42px] text-[18px] hover:bg-[#a86108] border-transparent capitalize">
                Click me
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="p-[20px]">
        <h1 className="text-[40px] font-semibold">find your next company!</h1>
        <p class="w-[500px]">
          Browse company profiles to find the right workplace for you. Learn
          about jobs, reviews, company culture, benefits and perks.
        </p>
      </div>
      <Slider />

      <div className="mt-[100px] flex justify-center">
        <div class="flex flex-row-reverse items-center gap-[200px]">
          <img src={zeroSectionImgDua} alt="" className="rounded-[8px]" />
          <div>
            <h1 class="text-[40px] w-[500px] font-[600]">
              “Hello” Karir yang lebih baik!
            </h1>
            <p class="text-[24px] font-[300] text-[#828282]">
              Dapatkan karir impianmu disini
            </p>
            <a href="">
              <button className="btn mt-[30px] bg-[#a86108] text-white w-[250px] h-[50px] text-[15px] hover:bg-[#a86108] border-transparent capitalize">
                Dapatkan Tips dan Trik nya disini!
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-[1000px]"></div>
    </>
  );
}
