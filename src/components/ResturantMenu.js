import { useParams } from "react-router-dom";
import useResturantMenu from "../utiles/useResturantMenu";
import ResturantAccordionTitle from "./ResturantAccordionTitle";
import { useState } from "react";

const ResturantMenu = () => {
  let { restId } = useParams();
  const [accordionOpen, setAccordionOpen] = useState(0)

  const restMenu = useResturantMenu(restId);
 
  let offer_Section =
    restMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  console.log(
    restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    "restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards"
  );
  const categories =
    restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return ( !restMenu ? "Loading restaurant data..." :
    <>
      <div className="container content resturant_containe max-w-[840px] mx-auto pt-4">
        <div className="breadcrum text-[10px] text-gray-400">
          Home/city/rest
        </div>
        <h2 className="item_heading mt-4 text-lg font-semibold text-[#282c3f]">
          {restMenu?.cards[0]?.card?.card?.info?.name}
        </h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] text-[#7e808c]">
              {restMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </div>
            <div className="text-[12px] text-[#7e808c]">
              {restMenu?.cards[0]?.card?.card?.info?.areaName},
              {restMenu?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </div>
          </div>
          <div>
            <div className="text-[#3d9b6d] font-bold">
              {restMenu?.cards[0]?.card?.card?.info?.avgRating}
            </div>
            <div className="text-[12px] text-[#7e808c]">
              {restMenu?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </div>
          </div>
        </div>
        <div className="text-[12px] text-[#7e808c] border-b-[1px] border-dashed border-[#d3d3d3] pb-4">
          {restMenu?.cards[0]?.card?.card?.info?.feeDetails?.message}
        </div>
        <div className="price_offer py-4 flex items-center justify-start gap-[20px]">
          <div className="text-sm font-semibold">
            {restMenu?.cards[0]?.card?.card?.info?.sla?.slaString}
          </div>
          <div className="text-sm font-semibold">
            {restMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}
          </div>
        </div>
        <div className="offers-wrapper flex items-start justify-start gap-1  ">
          {offer_Section?.map((item, index) => {
            // console.log(item);
            return (
              <div
                key={index}
                className="offers max-w-[200px]  w-full border-[1px] p-1 border-solid border-[#d3d3d3] rounded-md flex items-center justify-center flex-col"
              >
                <div className="text-sm leading-[15px] font-semibold">{item?.info?.header}</div>
                <div >
                  <span className="text-[10px] ">{item?.info?.description}</span>
                  <span className="text-[10px] ">{item?.info?.couponCode}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          {categories?.map((item,index) => {
            return (
              <>
                <ResturantAccordionTitle showItem={ index === accordionOpen} key={index} item= {item}
                setAccordionOpen={
                  ()=>{
                    if (accordionOpen === index) {
                      setAccordionOpen();
                    }
                    else{
                      setAccordionOpen(index);
                    }
                  }
                }
                />
                </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ResturantMenu;
