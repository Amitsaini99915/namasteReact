import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
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

const Body = () => {
  const [bannerSection, setBannerSection] = useState([]);
  // const [resListData, setResListData] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [topRes, settopRes] = useState([]);
  const [filterBtn, setfilterBtn] = useState();
  const [restalist, setRestList] = useState([]);
  // state for the filter btn
  const [restalistFilte, setRestListFilter] = useState([]);
  const [searchintput , setSearchInput] = useState("")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json, "json");
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
    setfilterBtn(json.data.cards[4].card.card);
    setRestList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestListFilter(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (resListDataLength.length === 0) {
  //   return <ShimmerCard />;
  // }

  const fastDelivery = () => {
    let fastDeliverylist = restalistFilte;
    let fastDeliverylist2 = fastDeliverylist.sort((a, b) => {
      return a.info?.sla?.deliveryTime - b.info?.sla?.deliveryTime;
    });
    console.log(fastDeliverylist2, "fastDeliverylist2");
    setRestList(fastDeliverylist2);
  };

  const topRated = () => {
    let topRatedList = restalistFilte.filter((element) => {
      return element.info.avgRatingString >= 4.5;
    });
    // console.log(topRatedList,"topRatedList");
    setRestList(topRatedList);
  };

  const rangeData = () => {
    let rangeDataList = restalistFilte.filter((element) => {
      return (
        element.info.feeDetails.totalFee > 3000 &&
        element.info.feeDetails.totalFee < 6000
      );
    });
    setRestList(rangeDataList);
  };

  const offerData = () => {
    let offerDataList = restalistFilte.filter((element) => {
      return element?.info?.aggregatedDiscountInfoV3?.header.length;
    });
    {
      // console.log(offerDataList, "offerDataList");
    }
    setRestList(offerDataList);
  };


  const filterDateBtn = (label) => {
    
      let obj = {
        "Fast Delivery": fastDelivery,
        "American": "American",
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

  const onlineStatus =  useOnlineStatus();
  console.log(onlineStatus,"onlineStatusonlineStatus")
  if(onlineStatus == false)return<h1>you are offline</h1>

  return (
    <div className="content container">
      {bannerSection.length === 0 ? (
        <ShimmerCardBanner />
      ) : (
        <BannerCarouel
          bannerSection={bannerSection}
          responsive={responsive}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/"
          }
        />
      )}
      {menuItem.length === 0 ? (
        <ShimmerCard />
      ) : (
        <BannerCarouel
          bannerSection={menuItem}
          responsive={responsive_mind}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"
        />
      )}
      {topRes.length === 0 ? (
        <ShimmerCard />
      ) : (
        <div className="carousel_wrapper">
          <h2 className="carousel_heading">Top restaurant chains in Bangalore</h2>
          <Carousel responsive={responsive_chain}>
            {topRes.map((topResdata) => {
              return (
                <Link
                  className="card_wrapper top_res"
                  to={`/resturant/${topResdata.info.id}`}
                  key={topResdata.info.id}
                >
                  <RestaurantCard
                    restdata={topResdata}
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360"
                    }
                  />
                </Link>
              );
            })}
          </Carousel>
        </div>
      )}
      
        <h2>Restaurants with online food delivery in Bangalore</h2>
        <div className="filter_btn_wrapper">
          {filterBtn &&
            filterBtn?.facetList.map((element) => {
              return (
                <button
                  key={element.id}
                  className="filter-btn"
                  onClick={() => filterDateBtn(element.facetInfo[0].label)}
                >
                  {element.facetInfo[0].label}
                </button>
              );
            })}
            
          {/* {filterBtn &&
            filterBtn?.sortConfigs.map((element) => {
              return (
                <button key={element.key} className="filter-btn">
                  {element.title}
                </button>
              );
            })} */}
             <div className="search_bar">
                    <input type="text" value={searchintput} onChange={(e)=>setSearchInput(e.target.value)} />
                    <button onClick={()=>{
                        let restalistData = restalistFilte?.filter((element)=>{
                          return element?.info?.name.toLowerCase().includes(searchintput.toLowerCase())
                        })
                        // console.log(restalistData,"aaa")
                        setRestList(restalistData)
                    }}>search</button>
                </div>
        </div>
       
      {restalist === 0 ? (
        <ShimmerCard />
      ) : (
        <div className="card_container card_wrapper">
          {restalist?.map((resdata) => {
            console.log("resdata",resdata)
            return (
              <Link
                className=""
                to={`/resturant/${resdata.info.id}`}
                key={resdata.info.id}
              >
                <RestaurantCard
                  restdata={resdata}
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660"
                  }
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Body;
