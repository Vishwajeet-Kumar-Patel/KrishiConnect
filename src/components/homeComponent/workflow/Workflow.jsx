import React from "react";
import "./Workflow.css";
// import Rectangle73 from "../../../img/Rectangle73.png";
import videoPic from "../../../img/wpic.png.png";

const Workflow = () => {
  return (
    <div className="mb-10 p-12 bg-gradient-to-r from-orange-500 to-green-500">
      <h1 className="text-4xl font-bold uppercase mb-4 text-center">
        How KrishiConnect works?
      </h1>
      <p className="text-md font-medium uppercase mb-4 text-white text-center">
        Take a Look at out Platform Demo
      </p>
      <div className="flex justify-around mediaQuery items-center text-white">
        <div className="grow">
          <ul className="list-decimal ml-[90px] list-inside">
            <li className="text-2xl mr-4 my-4">Sign-up to the platform.</li>
            <li className="text-2xl mr-4 my-3">
              Select whether you want to buy, rent or sell products.
            </li>
            <li className="text-2xl mr-4 my-4">Provide product details.</li>
            <li className="text-2xl mr-4 my-3">
              Explore and filter lists of products.
            </li>
            <li className="text-2xl mr-4 my-4">
              Place the order.
            </li>
            <li className="text-2xl mr-4 my-3">
              Stay in touch with the seller or buyer.
            </li>
            <li className="text-2xl mr-4 my-4">Stay updated by SMS.</li>
          </ul>
        </div>
        <div className="h-1/2 w-1/2">
          {/* <img src={Rectangle73} className='youtubeImg' alt="" /> */}
          <img src={videoPic} className="customImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
