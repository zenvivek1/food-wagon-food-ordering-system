// import React from "react";

const FoodCard = (props: any) => {
  return (
    <div className="min-h-90 w-70 bg-transparent flex flex-col gap-6 transition ease hover:scale-105 cursor-pointer">
      <div className="w-full h-65 rounded-xl bg-amber-500 overflow-hidden relative">
        <img
          className="object-cover w-full h-full"
          src={props.image}
          alt="food"
        />
        <div className="w-30 h-20 rounded-tr-4xl bg-amber-400 absolute bottom-0 left-0 flex text-white justify-center items-center gap-0.5">
          <div className="text-6xl font-bold tracking-wide trasition">
            {props.discount}
          </div>
          <div>
            <div className="text-3xl leading-8 font-bold">%</div>
            <div className="text-lg leading-4 font-bold">Off</div>
          </div>
        </div>
      </div>
      <div className="px-2 flex flex-col gap-2 items-start">
        <div className="font-bold text-black/70">{props.name}</div>
        <button className="py-1 px-6 font-bold text-orange-600/90 bg-orange-100 rounded-md cursor-pointer transition ease hover:scale-105">
          {props.daysRemaining} Days Remaining
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
