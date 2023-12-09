import { useParams } from "react-router-dom";
import useResturantMenu from "../utiles/useResturantMenu";

const ResturantMenu = () => {
  let { restId } = useParams();
  console.log(restId, "restId");

 const restMenu = useResturantMenu(restId);
 console.log(restMenu,"restMenu_restMenu");
  // useEffect(() => {


  //   fatchData();
  // }, []);
  // const fatchData = async () => {
  //   const response = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
  //       restId +
  //       "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   const json = await response.json();
  //   console.log(
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1],
  //     "data"
  //   );
  //   console.log(
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //       ?.title
  //   );
  //   console.log(
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //       ?.title
  //   );
  //   console.log(
  //     json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card
  //       ?.title
  //   );
  //   console.log(json);
  //   setRestMenu(json?.data);
  // };
  let offer_Section =
    restMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  return (
    <>
      <div className="container content resturant_containe">
        <div className="breadcrum">
          Home/city/rest
        </div>
        <h2 className="item_heading">
          {restMenu?.cards[0]?.card?.card?.info?.name}
        </h2>
        <div className="flex_class_between">
          <div>
            <div>
              {restMenu?.cards[0]?.card?.card?.info?.cuisines.join(", ")}
            </div>
            <div>{restMenu?.cards[0]?.card?.card?.info?.areaName}</div>
          </div>
          <div>
            <div>{restMenu?.cards[0]?.card?.card?.info?.avgRating}</div>
            <div>
              {restMenu?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}
            </div>
          </div>
        </div>
        <div>{restMenu?.cards[0]?.card?.card?.info?.feeDetails?.message}</div>
        <div className="price_offer">
          <div>{restMenu?.cards[0]?.card?.card?.info?.sla?.slaString}</div>
          <div>{restMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}</div>
        </div>
        <div className="offers-wrapper">
          {offer_Section?.map((item) => {
            // console.log(item);
            return (
              <div className="offers">
                <div>{item?.info?.header}</div>
                <div>{item?.info?.description}</div>
                <div>{item?.info?.couponCode}</div>
                <div>{item?.info?.offerLogo}</div>
              </div>
            );
          })}
        </div>
      </div>

      {restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
        (elem) => {
          console.log(elem?.card?.info);
          console.log(elem?.card?.info?.name);
          console.log(elem?.card?.info?.price);
          console.log(elem?.card?.info?.description);
          console.log(elem?.card?.info?.imageId);
          console.log(elem?.card?.info?.itemAttribute?.vegClassifier);
        }
      )}
      {
        <div>
          {
          
          }
        </div>
      }
      {
        // console.log(restMenu?.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
        restMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
          (element, index) => {
            console.log(element?.card?.card?.title, "card.card.title " + index);
            console.log(
              element?.card?.card?.itemCards?.length,
              "card.card.title "
            );
            console.log(element);
            {
              element?.card?.card?.itemCards?.map((item) => {
                console.log(
                  item?.card?.info?.name,
                  item?.card?.info?.price,
                  item?.card?.info?.description,
                  "item name"
                );
                console.log(item, "item");
              });
            }
          }
        )
      }
    </>
  );
};
export default ResturantMenu;
