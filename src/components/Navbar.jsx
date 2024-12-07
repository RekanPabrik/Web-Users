import React, { useRef, useEffect } from "react";
import logoRekanPabrik from "/assets/logoRekanPabrik.png"

export default function Navbar() {
  const navbarRef = useRef(null); 

  const scrollFunction = () => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 90
    ) {
      navbar.classList.add(
        "bg-white/50",
        "backdrop-blur-md",
        "shadow-lg",
        "border"
      );
      navbar.classList.remove("bg-transparent");
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove(
        "bg-white/50",
        "backdrop-blur-md",
        "shadow-lg",
        "border"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction); 
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="navbar fixed top-0 z-50 w-full bg-transparent transition-all duration-300 justify-between text-black capitalize"
    >
      <a href="/">
        <img
          src={logoRekanPabrik}
          alt="Logo"
          className="h-[100px]"
        />
      </a>
      <ul className="flex gap-6 mr-6 items-center text-black text-[20px] font-[500]">
        <li>
          <a
            href="/aboutus"
            className="nav-a hover:text-[#a86108] transition-colors duration-[.2s]"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="/registerperusahaan"
            className="nav-a hover:text-[#a86108] transition-colors duration-[.2s]"
          >
            For the Company
          </a>
        </li>
        <li>
          <a
            href="/contactus"
            className="nav-a hover:text-[#a86108] transition-colors duration-[.2s]"
          >
            Contact Us
          </a>
        </li>
        <li>
          <a href="/loginpage">
            <button className="btn bg-[#a86108] text-white w-[100px] text-[20px] font-bold hover:bg-[#a86108]">
              Log in
            </button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
