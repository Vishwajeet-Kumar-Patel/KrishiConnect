import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container bg-grey mt-3 p-9">
      <div className="content-container flex justify-center flex-col p-9">
        <h1 className="title text-4xl mt-2 font-bold m-auto text-black">Our Services</h1>
        <p className="description mt-3 text-lg font-semibold m-auto text-silver ">
          At AgriConnectt, we provide a wide range of services tailored to meet the needs of farmers. From advanced agricultural tools and equipment to expert advice on crop management, we ensure that our services help farmers achieve maximum productivity.
        </p>
        <ul className="list-decimal ml-[90px] list-inside text-white text-l font-style-italic">
            <li className="text-2xl mr-4 my-4">Quality Seeds and Fertilizers.</li>
            <li className="text-2xl mr-4 my-3">
            Modern Farming Equipment Rentals.
            </li>
            <li className="text-2xl mr-4 my-4">Expert Crop Management Consulting.</li>
            <li className="text-2xl mr-4 my-3">
            Access to Latest Agricultural Technology
            </li>
            <li className="text-2xl mr-4 my-4">
            24/7 Customer Support for Farmers
            </li>
            <li className="text-2xl mr-4 my-3">
            24/7 Customer Support for Farmers.
            </li>
            <li className="text-2xl mr-4 my-4">Obeys all the Government Policies.</li>
          </ul>
      </div>
    </div>
  );
};

export default Services;
