import { MdStars } from "react-icons/md";

const RestaurantCard =({restdata,src})=>{
    const data = restdata.info
    return(
        <div className="card rounded-2xl hover:scale-95 transition-all duration-300 ease-out">
            {console.log(data,"data")}
            <div className="card_image relative">
                <img className='res-img rounded-2xl h-full w-full max-h-[190px] object-cover' src={`${src}/${data.cloudinaryImageId}`} alt="" />
                <div className="item_offer absolute bottom-0 left-0 w-full text-center h-[81px] bg-gradient-to-b from-transparent to-black rounded-2xl">
                    <div className="offer_text text-lg font-bold text-white absolute bottom-2 w-full text-center">
                        {data?.aggregatedDiscountInfoV3?.header}{data?.aggregatedDiscountInfoV3?.subHeader}
                    </div>
                </div>
            </div>
            <div className="card_content py-2">
                <div className="name text-lg font-bold text-[#02060cbf]">{data.name}</div>
                <div className="rating_time text-base font-bold text-[#02060cbf]"><MdStars className="inline-block text-xl text-[#60b246]"/> {data.avgRatingString} .{data.sla.slaString}</div>
                <div className="cousin text-base font-normal text-[#02060c99]">{data.cuisines.join(" , ")}</div>
                <div className="address text-base font-normal text-[#02060c99]">{data.locality} ,{data.areaName}</div>
            </div>
        </div>
    )
}

//High order component 

//input => resturantCard   output=> resturantCardPromoted 

export const withPromotedLabel = (RestaurantCard)=>{
    return(props)=>{
        return (
            <div className="relative group">
                {/* <label className="group-hover:scale-95 absolute top-0 right-0 z-50 bg-blue-600 text-white w-[100px] py-2 text-center">veg</label> */}
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;
