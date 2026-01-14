// import React from 'react'
import FoodCardB from "./Cards/FoodCardB";
import HowSteps from "./Cards/HowSteps";

const SectionB = () => {
  return (
    <div className="min-h-[80vh] bg-linear-to-b from-orange-300/30 via-white to-white p-10 flex flex-col justify-center items-center py-20 px-20">
      <div className="font-bold text-orange-500 text-4xl text-center">
        How does it work
      </div>
      <div className="flex gap-10 mt-10  flex-wrap">
        <HowSteps
          icon={
            <i className="ri-map-pin-line text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Select Location"}
          desc={"Choose the location where your food will be delivered."}
        />
        <HowSteps
          icon={
            <i className="ri-restaurant-fill text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Choose Order"}
          desc={"Check over hundreds of menus to pick your favorite food"}
        />
        <HowSteps
          icon={
            <i className="ri-receipt-fill text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Pay Advance"}
          desc={
            "It's quick safe, and simple. Select several methods of payment"
          }
        />
        <HowSteps
          icon={
            <i className="ri-bowl-fill text-orange-400/80 text-9xl drop-shadow-[0_12px_20px_rgba(251,146,60,0.40)]"></i>
          }
          title={"Enjoy Meals"}
          desc={"Food is made and delivered directly to your home."}
        />
      </div>
      <div className="text-3xl font-bold m-16 text-center">Popular Items</div>
      <div className="h-1/2 flex justify-center align-center gap-6  flex-wrap">
        <FoodCardB
          name="Paneer Tikka"
          price={5.7}
          location="Bhopal"
          image="https://c.ndtvimg.com/2024-07/rvdidqqo_paneer-tikka_120x90_01_July_24.jpg"
        />

        <FoodCardB
          name="Noodles"
          price={7.2}
          location="Delhi"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s"
        />

        <FoodCardB
          name="Masala Dosa"
          price={3.5}
          location="Bengaluru"
          image="https://myfoodstory.com/wp-content/uploads/2025/08/Dosa-Recipe-2-500x500.jpg"
        />

        <FoodCardB
          name="Veg Biryani"
          price={6.0}
          location="Hyderabad"
          image="https://www.shutterstock.com/image-photo/veg-biryani-tempting-600nw-2583130989.jpg"
        />

        <FoodCardB
          name="Chole Bhature"
          price={4.2}
          location="Amritsar"
          image="https://chefadora.b-cdn.net/medium_23ff54faa8628ac0b378003d51b400e4_511694cd35.jpg"
        />
      </div>
    </div>
  );
};

export default SectionB;
