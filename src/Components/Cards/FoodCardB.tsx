// import React from "react";

const FoodCardB = (props: any) => {
  return (
    <div className="min-h-90 w-55 bg-transparent flex flex-col gap-3 transition ease hover:scale-105 cursor-pointer">
      <div className="w-full h-55 rounded-xl bg-amber-500 overflow-hidden relative">
        <img
          className="object-cover w-full h-full"
          src={props.image}
          alt="food"
        />
      </div>
      <div className="px-2 flex flex-col gap-1/2 items-start">
        <div className="font-bold text-black/70">{props.name}</div>
        <div className="text-orange-400"><i className="ri-map-pin-2-fill">{props.location}</i></div>
        <div className="font-bold text-black/70">${props.price}</div>
        <button className="py-1 px-6 mt-2 font-bold bg-orange-600/90 text-white rounded-md cursor-pointer transition ease hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCardB;
