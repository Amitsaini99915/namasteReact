import ResturantAccordionItem from "./ResturantAccordionItem";
import ItemList from "./itemList";

const ResturantAccordionTitle = ({  showItem ,item, setAccordionOpen}) => {
    const handleAccordion =()=>{
        setAccordionOpen();
    }
    const listitem = item.card.card.itemCards
    return (
      <div className=" cursor-pointer">
        <div className="font-bold px-4 py-4 border-b-[16px] border-solid border-[#f1f1f6]" onClick={handleAccordion}>{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</div>   
        {showItem && <ResturantAccordionItem listitem={item?.card?.card?.itemCards}/>}
        {/* {showItem && <ItemList listitem={item?.card?.card?.itemCards}/>} */}
        {/* {showItem && listitem.map((element) => {
        return (
          <div key={element?.card?.info?.id} className="mb-4 grid grid-cols-6 gap-4 border-b-[1px] border-gray-200 border-solid pb-6">
            <div className="col-span-5">
              <div className="font-semibold text-lg text-[#3e4152] ">
              {element?.card?.info?.name }
              </div>
              <div className="font-normal text-base text-[#3e4152] ">
              ₹ {element?.card?.info?.price}
              </div>
              <div className="text-sm ">{element.card.info.description}</div>
            </div>
            <div className=" col-span-1 relative">
              <div className="w-[118px] h-[96px]">
              <img
                className="w-full h-full"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${element?.card?.info?.imageId}`}
                alt={`Product: ${element.card.info.name}`}
              />
              </div>
              <div className="absolute -bottom-4 text-center w-full">
                <button className=" bg-white py-2 px-4 text-green-500 shadow-xl" onClick={()=>{console.log("hello")}} >Add ds+</button>
              </div>
            </div>
          </div>
        );
      })} */}
      </div>
    );
  };
  export default ResturantAccordionTitle;
  
  
  