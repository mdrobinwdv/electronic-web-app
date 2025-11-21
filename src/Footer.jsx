// Responsive Footer Component
import React, { forwardRef } from 'react';
import pice from "../src/assets/picture/robin.png.png";
import { FaFacebook, FaYoutube, FaInstagramSquare, FaGithub } from "react-icons/fa";

const Footer = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="about"
      className="w-full min-h-[450px] mt-10 bg-blue-200 flex justify-center items-center px-3"
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 text-black text-center sm:text-lg">
          <p>Become an Affiliate</p>
          <p>Areas delivered in Dhaka</p>
          <p>Areas delivered in Gazipur</p>
          <p>Areas delivered in Narayanganj</p>
          <p>Areas delivered in Sylhet</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 text-black text-center sm:text-lg underline cursor-pointer">
          <p>Terms and Conditions</p>
          <p>Partner with Us</p>
          <p>foodpanda for Business</p>
          <p>foodpanda Deals</p>
          <p>All cities</p>
          <p>Areas delivered in Barisal</p>
          <p>Areas delivered in Khulna</p>
          <p>Areas delivered in Rajshahi</p>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 text-black text-center sm:text-lg underline cursor-pointer">
          <p>Privacy Policy</p>
          <p>pandapro Subscription</p>
          <p>Download foodpanda Apps</p>
          <p>pandago for business</p>
          <p>Grocery delivery</p>
          <p>Ramadan delivery</p>
          <p>Areas delivered in Comilla</p>
        </div>

        {/* Column 4 (Profile + Social) */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center items-center">
            <img
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full border-2 border-white hover:border-red-500 transition"
              src={pice}
              alt="profile"
            />
          </div>

          <ul className="mt-4 flex justify-center items-center gap-4">
            <li className="w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] flex justify-center items-center text-3xl sm:text-4xl rounded-full text-[#1877F2] bg-white shadow-md">
              <a href="https://www.facebook.com/robinkhan.robinkhan.946179" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li className="w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] flex justify-center items-center text-3xl sm:text-4xl rounded-full text-[#FF0000] bg-white shadow-md">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li className="w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] flex justify-center items-center text-3xl sm:text-4xl rounded-full text-[#DD2A7B] bg-white shadow-md">
              <a href="#">
                <FaInstagramSquare />
              </a>
            </li>
            <li className="w-[45px] h-[45px] sm:w-[52px] sm:h-[52px] flex justify-center items-center text-3xl sm:text-4xl rounded-full text-[#0D1117] bg-white shadow-md">
              <a href="https://github.com/mdrobinwdv" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Footer;
