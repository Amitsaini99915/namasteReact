import ResturantAccordionItem from "./ResturantAccordionItem";

const ResturantAccordionTitle = ({  showItem ,item, setAccordionOpen}) => {
    const handleAccordion =()=>{
        setAccordionOpen();
    }
    const listitem = item.card.card.itemCards
    return (
      <div className=" cursor-pointer">
        <div className="font-bold px-4 py-4 border-b-[16px] border-solid border-[#f1f1f6]" onClick={handleAccordion}>{item?.card?.card?.title}({item?.card?.card?.itemCards?.length})</div>   
        {showItem && <ResturantAccordionItem listitem={item?.card?.card?.itemCards}/>}
        
      </div>
    );
  };
  export default ResturantAccordionTitle;
  
  
  