import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = ({ data }) => {
  const [resListData, setResListData] = useState(data);
  return (
    <div className="content container">
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            let filterdata = resListData.filter((element) => {
              return element.info.avgRatingString > 3.8;
            });
            setResListData(filterdata);
          }}
        >
          Top rated
        </button>
      </div>
      <div className="card_container">
        {resListData.map((resdata) => {
          return <RestaurantCard key={resdata.info.id} restdata={resdata} />;
        })}
      </div>
    </div>
  );
};
export default Body;
