import React from "react";

export default function ShimmerCardBanner({}) {
  return (
    <>
      <div className="shimmer_heading_section">
        <h2 className="shimmercardheading"></h2>
        <div className="button_wrapper">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="card_container_banner">
        <div className="card_1  shimmerCard">
          <div className="card_image"></div>
        </div>
        <div className="card_2 shimmerCard">
          <div className="card_image"></div>
        </div>
        <div className="card_3 shimmerCard">
          <div className="card_image"></div>
        </div>
      </div>
    </>
  );
}
