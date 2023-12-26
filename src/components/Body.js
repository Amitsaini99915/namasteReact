import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
// carousel import
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import {
  responsive,
  responsive_mind,
  responsive_chain,
} from "./../utiles/bannerCarousel";
import ShimmerCardBanner from "./ShimmerCardBanner";
import BannerCarouel from "./Carousel/BannerCarousel";
import useOnlineStatus from "../utiles/useOnlineStatus";
import UserContext from "../utiles/UserContext";
import { useContext } from "react";
import ShimmerDishCard from "./ShimmerDishCard";
import {
  bannerCarouselSrc,
  bannerCarouselSrc2,
  bannerCarouselSrc3,
  cardSrc,
} from "../utiles/appData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Body = () => {
  const [bannerSection, setBannerSection] = useState([]);
  // const [resListData, setResListData] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [topRes, settopRes] = useState([]);
  const [filterBtn, setFilterBtn] = useState();
  const [restalist, setRestList] = useState([]);
  // state for the filter btn
  const [restalistFilte, setRestListFilter] = useState([]);
  const [searchintput, setSearchInput] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json, "json api data from");
    // banner section
    setBannerSection(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    // menu item
    setMenuItem(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info
    );
    // top restaurant section
    settopRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // filter button
    setFilterBtn(json.data.cards[4].card.card);
   
    setRestList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setRestListFilter(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,
      "json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
    console.log(
      json?.data?.cards[1],
      "json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
    console.log(
      json?.data?.cards[2],
      "json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
    console.log(
      json.data.cards[3],
      "json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
    console.log(
      json.data.cards[4],
      "json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
      "json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
    console.log(
      json?.data?.cards[5],
      "json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants"
    );
  };

  const fastDelivery = () => {
    let fastDeliverylist = restalistFilte;
    let fastDeliverylist2 = fastDeliverylist.sort((a, b) => {
      return a.info.sla.deliveryTime - b.info.sla.deliveryTime;
    });
    setRestList(fastDeliverylist2);
  };

  const topRated = () => {
    let topRatedList = restalistFilte.filter((element) => {
      return element.info.avgRatingString >= 4.5;
    });
    setRestList(topRatedList);
  };

  const rangeData = () => {
    let rangeDataList = restalistFilte.filter((element) => {
      return (
        element?.info?.feeDetails?.totalFee > 3000 &&
        element?.info?.feeDetails?.totalFee < 6000
      );
    });
    setRestList(rangeDataList);
  };

  const offerData = () => {
    let offerDataList = restalistFilte.filter((element) => {
      return element?.info?.aggregatedDiscountInfoV3?.header.length;
    });

    setRestList(offerDataList);
  };

  const filterDateBtn = (label) => {
    let obj = {
      "Fast Delivery": fastDelivery,
      American: "American",
      "New on Swiggy": "New on Swiggy",
      "Ratings 4.5+": topRated,
      "Pure Veg": "Pure Veg",
      Offers: offerData,
      "Rs. 300-Rs. 600": rangeData,
    };

    // Example: Call the function associated with the label "Fast Delivery"
    if (obj[label] instanceof Function) {
      obj[label]();
    }
  };

  const onlineStatus = useOnlineStatus();
  // console.log(onlineStatus, "onlineStatusonlineStatus");
  const notify = () => toast.error("check you internet conection please");
  const handleClick = () => {};
  if (!onlineStatus) {
    
      notify();
   
  }
  return (
    <div className="content container max-w-[1200px] mx-auto px-4 ">
      <ToastContainer />
      {bannerSection.length === 0 ? (
        <ShimmerCardBanner />
      ) : (
        <BannerCarouel
          bannerSection={bannerSection}
          responsive={responsive}
          src={bannerCarouselSrc}
          sliderClass='react-multi-carousel-track abc'
          heading={"Best offers for you"}
        />
      )}
       {!menuItem ? (
        <ShimmerDishCard />
      ) : (
        <BannerCarouel
          bannerSection={menuItem}
          responsive={responsive_mind}
          src={bannerCarouselSrc2}
          heading={"What's on your mind?"}
        />
      )}
      {topRes?.length === 0 || !topRes ? (
        <ShimmerCard />
      ) : (
        <div className="carousel_wrapper">
          <h2 className="carousel_heading text-[#02060ceb] text-2xl font-bold my-4">
            Top restaurant chains in Bangalore
          </h2>
          <Carousel responsive={responsive_chain}>
            {topRes?.map((topResdata) => {
              return (
                <Link
                  className="md:pr-8 w-full inline-block"
                  to={`/resturant/${topResdata.info.id}`}
                  key={topResdata.info.id}
                >
                  <RestaurantCard
                    restdata={topResdata}
                    src={bannerCarouselSrc3}
                  />
                </Link>
              );
            })}
          </Carousel>
        </div>
      )}

      {filterBtn && (
        <h2 className="carousel_heading text-2xl font-bold my-4 text-[#02060ceb]">
          Restaurants with online food delivery in Bangalore
        </h2>
      )}
      {filterBtn && (
        <div className="filter_btn_wrapper flex items-center justify-start gap-2 my-4 flex-wrap">
          {filterBtn?.facetList?.map((element) => {
            return (
              <button
                key={element.id}
                className="text-sm shadow-sm leading-[18px] tracking-tight filter-btn py-2 px-4 border-[1px] border-[#e2e2e7] rounded-full text-[#02060cbf]"
                onClick={() => filterDateBtn(element.facetInfo[0].label)}
              >
                {element.facetInfo[0].label}
              </button>
            );
          })}
          <div className="search_bar border-[1px] border-[#e2e2e7] border-solid shadow-sm rounded-md">
            <input
              type="text"
              value={searchintput}
              onChange={(e) => setSearchInput(e.target.value)}
              className=" p-2  rounded-md"
            />
            <button
              className="p-2  rounded-md border-l-[1px] border-[#e2e2e7] border-solid"
              onClick={() => {
                let restalistData = restalistFilte?.filter((element) => {
                  return element?.info?.name
                    .toLowerCase()
                    .includes(searchintput.toLowerCase());
                });
                setRestList(restalistData);
              }}
            >
              search
            </button>
          </div>
        </div>
      )}
      {restalist?.length === 0 ? (
        <ShimmerCard />
      ) : (
        <div className="card_container card_wrapper container max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
            {restalist?.map((resdata) => {
              return (
                <Link
                  className=""
                  to={`/resturant/${resdata.info.id}`}
                  key={resdata.info.id}
                >
                  {resdata?.info?.veg ? (
                    <RestaurantCardPromoted restdata={resdata} src={cardSrc} />
                  ) : (
                    <RestaurantCard restdata={resdata} src={cardSrc} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Body;
