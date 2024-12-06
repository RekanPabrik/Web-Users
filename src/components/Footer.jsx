import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa"; 
import logoRekanPabrik from "/assets/logoRekanPabrik.png";

function Footer() {
  return (
    <>
      <footer className="mt-[100px] bg-white p-[20px] text-[#a86108] flex items-start justify-between flex-wrap">
        <div>
          <h1 className="text-[40px] font-semibold">Address</h1>
          <p className="w-[350px]">
            Gedung Panehan Pasca Sarjana Lantai 1, Jl. Telekomunikasi Terusan
            Buah Batu, Bandung - 40257, Indonesia
          </p>
        </div>
        <div>
          <img src={logoRekanPabrik} alt="logo rekan pabrik" />
        </div>
        <div>
          <h1 className="text-[40px] font-semibold">Sosial Media</h1>
          <div className="flex gap-[15px]">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={50} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={50} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
