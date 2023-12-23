import { useEffect, useState } from "react";

const useResturantMenu = (restId)=>{
    const [restMenu, setRestMenu] = useState();

    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" + restId );
        const json = await data.json();
        setRestMenu(json.data);
        console.log(json.data,"jsondata")
    }
    return restMenu;
}
export default useResturantMenu;