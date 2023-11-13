const RestaurantCard =({restdata})=>{
    const data = restdata.info
    return(
        <div className="card">
            {/* {console.log(data,"data")} */}
            <div className="card_image">
                <img className='' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mprat173vnnvwloj23g4" alt="" />
            </div>
            <div className="card_content">
                <div className="name">{data.name}</div>
                <div className="rating_time">{data.avgRatingString} .{data.sla.slaString}</div>
                <div className="cousin">{data.cuisines.join(" , ")}</div>
                <div className="address">{data.locality} ,{data.areaName}</div>
            </div>
        </div>
    )
}
export default RestaurantCard;
