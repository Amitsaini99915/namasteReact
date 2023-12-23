import React from "react";

export default function ShimmerDishCard() {
  return (
    <div className="card_container mt-4 ">
      <div className="flex items-center justify-between">
        <h2 className="shimmercardheading bg-gray-200 w-[300px] h-[36px] rounded-md"></h2>
        <div className="button_wrapper flex items-center justify-between gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-8 mt-4 gap-4">
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
        <div className="card shimmerCard flex items-center justify-center flex-col">
          <div className="card_image w-[125px] h-[125px] bg-gray-200 rounded-full"></div>
          <div className="card_content mt-2 bg-gray-200 w-[100px] h-[36px] rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
