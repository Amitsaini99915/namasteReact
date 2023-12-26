import React from "react";

export default function ShimmerCardBanner({}) {
  return (
    <>
      <div className="shimmer_heading_section mt-4 flex items-center justify-between">
        <h2 className="shimmercardheading bg-gray-200 w-[300px] h-[36px] rounded-md"></h2>
        <div className="button_wrapper flex items-center justify-between gap-4">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          
        </div>
      </div>
      <div className="card_container_banner grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
        <div className="card_1  shimmerCard h-[250px] col-span-2">
          <div className="card_image bg-gray-200 w-full h-full rounded-2xl"></div>
        </div>
        <div className="card_2 shimmerCard h-[250px] col-span-2">
          <div className="card_image bg-gray-200 w-full h-full rounded-2xl"></div>
        </div>
        <div className="card_3 shimmerCard h-[250px]col-span-0  lg:col-span-1">
          <div className="card_image bg-gray-200 w-full h-full rounded-tl-2xl rounded-bl-2xl"></div>
        </div>
      </div>
    </>
  );
}
