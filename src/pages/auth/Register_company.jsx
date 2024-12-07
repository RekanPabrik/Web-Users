import React, { useState } from "react";
import logoRekanPabrik from "/assets/logoRekanPabrik.png";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Register_company() {
  const [formData, setFormData] = useState({
    companyname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.companyname.trim()) {
      newErrors.companyname = "Company name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!formData.confirmpassword.trim()) {
      newErrors.confirmpassword = "Confirm password is required";
    } else if (formData.confirmpassword !== formData.password) {
      newErrors.confirmpassword = "Passwords do not match";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      Swal.fire({
        title: "Success!",
        text: "Akun Anda berhasil dibuat",
        icon: "success",
        confirmButtonText: "Lanjutkan",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible); 
  };

  return (
    <>
      <div className="text-center mt-[150px]">
        <h1 className="text-[#a86108] text-[64px] mb-0 font-bold">
          Welcome Recruiter
        </h1>
        <p className="text-[#ad9f9f] text-2xl mt-0">
          Sign up to your account to continue
        </p>
      </div>

      <div className="flex justify-evenly mt-[50px]">
        <div>
          <form id="registrationForm" onSubmit={handleSubmit}>
            <div className="mt-5">
              <label htmlFor="companyname" className=" text-xl font-medium">
                Company Name
              </label>
              <br />
              <input
                type="text"
                name="companyname"
                id="companyname"
                value={formData.companyname}
                onChange={handleChange}
                className="w-[431px] h-10 text-[15px] rounded-lg border-2 border-solid border-[#ad9f9f]"
              />
              {errors.companyname && (
                <span className="error text-red-500 block mt-[5px]">
                  {errors.companyname}
                </span>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="email" className=" text-xl font-medium">
                Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[431px] h-10 text-[15px] rounded-lg border-2 border-solid border-[#ad9f9f]"
              />
              {errors.email && (
                <span className="error text-red-500 block mt-[5px]">
                  {errors.email}
                </span>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="password" className=" text-xl font-medium">
                Password
              </label>
              <br />
              <div className="relative w-[431px]">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-[431px] h-10 text-[15px] rounded-lg border-2 border-solid border-[#ad9f9f]"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.password && (
                <span className="error text-red-500 block mt-[5px]">
                  {errors.password}
                </span>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="confirmpassword" className=" text-xl font-medium">
                Confirm Password
              </label>
              <br />
              <div className="relative w-[431px]">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="confirmpassword"
                  id="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  className="w-full h-10 text-[15px] rounded-lg border-2 border-solid border-[#ad9f9f] pr-10"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {errors.confirmpassword && (
                <span className="error text-red-500 block mt-[5px]">
                  {errors.confirmpassword}
                </span>
              )}
            </div>
            <div className="flex justify-center mt-[30px]">
              <button
                type="submit"
                className="w-[225px] h-10 bg-[#a86108] cursor-pointer text-[white] text-base rounded-lg border-[transparent]"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="w-[500px]">
          <img
            src={logoRekanPabrik}
            alt="Logo Rekan Pabrik"
            className="w-[500px]"
          />
        </div>
      </div>
    </>
  );
}

export default Register_company;
