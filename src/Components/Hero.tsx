import { useState } from "react";
import foodImg from "../assets/foof1-removebg-preview.png";
import { useAuth } from "../Context/AuthContext";
import ScrollIndicator from "./ScrollNow/ScrollIndicator";

const Hero = () => {
  const [DeliveryOption, setDeliveryOption] = useState("Delivery");
  const { isLoggedIn, user } = useAuth();

  return (
    <div className="min-h-[65vh] bg-primary relative w-full flex justify-center items-center gap-20 flex-wrap py-10 flex-col-reverse text-center px-4 lg:flex-row lg:text-start lg:px-0">
      <div>
        <div>
          <div className="font-bold text-white mb-4 text-4xl leading-tight lg:text-7xl lg:leading-20">
            {isLoggedIn ? (
              <>
                {`Welcome, ${user?.name.split(" ")[0]}`}
                <br />
                Hungry Already?
                <br />
                Let's Fix That🍔
              </>
            ) : (
              "Are you starving?"
            )}
          </div>

          <div className="text-lg mb-6">
            Within a few clicks, find meals that are accessible near you
          </div>
        </div>

        <ScrollIndicator />

        <div className="bg-white rounded-2xl mt-6 w-full scale-95 lg:min-w-4/10 lg:scale-100">
          <div className="flex p-4 gap-3 justify-center lg:justify-start">
            <button
              onClick={() => setDeliveryOption("Delivery")}
              className={`py-1 px-6 font-bold ${
                DeliveryOption === "Delivery" &&
                "text-orange-600/90 bg-orange-100"
              } rounded cursor-pointer transition hover:scale-105`}
            >
              <i className="ri-motorbike-fill mr-2"></i>Delivery
            </button>

            <button
              onClick={() => setDeliveryOption("Pickup")}
              className={`py-1 px-6 font-bold ${
                DeliveryOption === "Pickup" &&
                "text-orange-600/90 bg-orange-100"
              } rounded cursor-pointer transition hover:scale-105`}
            >
              <i className="ri-briefcase-line mr-2"></i>Pickup
            </button>
          </div>

          <div className="h-0.5 bg-zinc-200 w-full"></div>

          <div className="flex gap-2 items-center p-4 flex-col lg:flex-row">
            <div className="relative w-full lg:w-7/10">
              <input
                className="w-full px-4 py-3 pl-10 outline-none bg-zinc-200/40 rounded-lg"
                type="text"
                placeholder={
                  DeliveryOption === "Pickup"
                    ? "Search For Restaurants"
                    : "Enter Your Delivery Location"
                }
              />
              <i className="ri-map-pin-2-fill absolute left-3 top-1/2 -translate-y-1/2 text-xl text-orange-500"></i>
            </div>

            <button className="py-4 whitespace-nowrap px-8 bg-secondary rounded-lg text-white font-bold w-full lg:w-auto">
              <i className="ri-search-line mr-2"></i>
              {DeliveryOption === "Pickup" ? "Search" : "Find Food"}
            </button>
          </div>
        </div>
      </div>

      <div>
        <img
          src={foodImg}
          alt="foodimg"
          className="shadow-2xl rotate-2 hover:rotate-6 h-[240px] lg:h-100 lg:scale-100"
        />
      </div>
    </div>
  );
};

export default Hero;
