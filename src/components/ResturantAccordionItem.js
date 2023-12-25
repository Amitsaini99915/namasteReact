import React from 'react';
import { addItem } from '../utiles/cartSlice';
import { useDispatch } from 'react-redux';

export default function ResturantAccordionItem({ listitem }) {
  const dispatch = useDispatch();
console.log(addItem,"addItemaddItemaddItemaddItemaddItemaddItem")
  const handleAddItem =(item)=>{
    dispatch(addItem(item))
    
  }
  return (
    <div className="py-4 ">
      {listitem.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="mb-4 grid grid-cols-6 gap-4 border-b-[1px] border-gray-200 border-solid pb-6">
            <div className="col-span-5">
              <div className="font-semibold text-lg text-[#3e4152] ">
              {item?.card?.info?.name }
              </div>
              <div className="font-normal text-base text-[#3e4152] ">
              ₹ {item?.card?.info?.price}
              </div>
              <div className="text-sm ">{item.card.info.description}</div>
            </div>
            <div className=" col-span-1 relative">
              <div className="w-[118px] h-[96px]">
              <img
                className="w-full h-full rounded-md"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${item?.card?.info?.imageId}`}
                alt={`Product: ${item.card.info.name}`}
              />
              </div>
              <div className="absolute -bottom-4 text-center w-full">
                <button className=" bg-white py-2 px-4 text-green-500 shadow-xl rounded-md" onClick={()=>handleAddItem(item)} > Add+</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}
