import React from "react";

export default function ShimmerCard() {
  return (
    <>
      <div className="flex items-center justify-between mt-4">
        <h2 className="shimmercardheading bg-gray-200 w-[300px] h-[36px] rounded-md"></h2>
        <div className="button_wrapper flex items-center justify-between gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      <div className="card_container grid grid-cols-4 mt-4 gap-4">
        <div className="card shimmerCard ">
          <div className="card_image bg-gray-200 w-full h-[200px] rounded-md"></div>
          <div className="card_content">
            <div className="name bg-gray-200 w-[140px] h-[20px] rounded-md mt-2"></div>
            <div className="rating_time bg-gray-200 w-[120px] h-[20px] rounded-md mt-2"></div>
            <div className="cousin bg-gray-200 w-[100px] h-[20px] rounded-md mt-2"> </div>
            <div className="address bg-gray-200 w-[60px] h-[20px] rounded-md mt-2"></div>
          </div>
        </div>
        <div className="card shimmerCard ">
          <div className="card_image bg-gray-200 w-full h-[200px] rounded-md"></div>
          <div className="card_content">
            <div className="name bg-gray-200 w-[140px] h-[20px] rounded-md mt-2"></div>
            <div className="rating_time bg-gray-200 w-[120px] h-[20px] rounded-md mt-2"></div>
            <div className="cousin bg-gray-200 w-[100px] h-[20px] rounded-md mt-2"> </div>
            <div className="address bg-gray-200 w-[60px] h-[20px] rounded-md mt-2"></div>
          </div>
        </div>
        <div className="card shimmerCard ">
          <div className="card_image bg-gray-200 w-full h-[200px] rounded-md"></div>
          <div className="card_content">
            <div className="name bg-gray-200 w-[140px] h-[20px] rounded-md mt-2"></div>
            <div className="rating_time bg-gray-200 w-[120px] h-[20px] rounded-md mt-2"></div>
            <div className="cousin bg-gray-200 w-[100px] h-[20px] rounded-md mt-2"> </div>
            <div className="address bg-gray-200 w-[60px] h-[20px] rounded-md mt-2"></div>
          </div>
        </div>
        <div className="card shimmerCard ">
          <div className="card_image bg-gray-200 w-full h-[200px] rounded-md"></div>
          <div className="card_content">
            <div className="name bg-gray-200 w-[140px] h-[20px] rounded-md mt-2"></div>
            <div className="rating_time bg-gray-200 w-[120px] h-[20px] rounded-md mt-2"></div>
            <div className="cousin bg-gray-200 w-[100px] h-[20px] rounded-md mt-2"> </div>
            <div className="address bg-gray-200 w-[60px] h-[20px] rounded-md mt-2"></div>
          </div>
        </div>
      </div>
    </>
  );
}
