import { useState } from "react";
import ItemList from "./itemList";

const ResturantAccordionTitle = ({ item, showItem , setAccordionOpen}) => {
    // console.log(item,"item");
    const handleAccordion =()=>{
        setAccordionOpen();
    }
    return (
      <div className=" cursor-pointer">
        <div className="font-bold px-4 py-4 border-b-[16px] border-solid border-[#f1f1f6]" onClick={handleAccordion}>{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</div>   
        {showItem && <ItemList listitem={item.card.card.itemCards}/>}
      </div>
    );
  };
  export default ResturantAccordionTitle;
  
  
  