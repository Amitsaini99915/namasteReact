import React from 'react'

export default function ResturantAccordionItem({ listitem }) {
  return (
    <div className="py-4 ">
      {listitem.map((element) => {
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
                className="w-full h-full rounded-md"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${element?.card?.info?.imageId}`}
                alt={`Product: ${element.card.info.name}`}
              />
              </div>
              <div className="absolute -bottom-4 text-center w-full">
                <button className=" bg-white py-2 px-4 text-green-500 shadow-xl rounded-md" onClick={()=>{console.log("hello")}} >Add+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
