import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import ExpandDropdown from "../components/expandText";

const Help = () => {
  const navigate = useNavigate();

  const booking_help = [
    {
      heading: "Q: How do I place an order on KrishiConnect ?",
      content:
        "A: Browse our catalog, select the products you want, add them to your cart, and proceed to checkout to place your order.",
    },
    {
      heading: "Q: Can I modify or cancel my order after placing it?",
      content:
        "A: You can modify or cancel your order within 30 minutes of placing it. Contact our support team for assistance.",
    },
    {
      heading: "Q: How do I track my order?",
      content:
        "A: You can track your order status through the 'Order History' page in your account or use the tracking link provided in your confirmation email.",
    },
  ];

  const renting_help = [
    {
      heading: "Q: How do I list my agricultural equipment for rent?",
      content:
        "A: Sign up as a provider, and you can list your equipment by filling out the equipment details and uploading relevant documents.",
    },
    {
      heading: "Q: What is the process for setting rental prices?",
      content:
        "A: You can set your rental prices based on the type and condition of the equipment. You can update the prices anytime from your provider dashboard.",
    },
    {
      heading: "Q: How do I handle disputes with renters?",
      content:
        "A: In case of disputes, contact our support team. We have a mediation process to help resolve issues between providers and renters.",
    },
  ];

  return (
    <div className="">
      <div className="bg-[green] p-9 content-center">
        <h1 className="font-bold text-5xl text-center text-white m-8">
          How can we Help?
        </h1>
      </div>
      <div className="bg-white rounded-2xl mx-auto w-11/12 p-9 -translate-y-8 flex justify-center shadow-lg">
        <div style={{ width: "45%" }} className="text-center">
          <h1 className="text-xl font-semibold">Ordering Help</h1>
          {booking_help.map((item, i) => {
            return (
              <ExpandDropdown
                key={i}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
        <div style={{ width: "45%" }} className="text-center w-100">
          <h1 className="text-xl font-semibold">Renting Help</h1>
          {renting_help.map((item, i) => {
            return (
              <ExpandDropdown
                key={i}
                heading={item.heading}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
      <div className="w-100">
        <div className="p-9 flex w-screen">
          <h1 className="text-xl mr-5 font-semibold">Still need help?</h1>
          <button className="bg-[green] text-white p-3 rounded-lg" onClick={() => navigate("/contact")}>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
