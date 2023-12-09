const RestaurantCard =({restdata,src})=>{
    const data = restdata.info
    return(
        <div className="card">
            {/* {console.log(data,"data")} */}
            <div className="card_image relative">
                <img className='res-img' src={`${src}/${data.cloudinaryImageId}`} alt="" />
                <div className="item_offer">
                    <div className="offer_text">
                    {data?.aggregatedDiscountInfoV3?.header}{data?.aggregatedDiscountInfoV3?.subHeader}
                    </div>
                </div>
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
