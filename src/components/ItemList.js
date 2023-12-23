const ItemList = ({ listitem }) => {
  console.log(listitem, "listitem2222");
  return (
    <div className="py-4 ">
      {listitem.map((element) => {
        return (
          <div key={element.card.info.id} className="mb-4 grid grid-cols-6 gap-4 border-b-[1px] border-gray-200 border-solid">
            <div className="col-span-5">
              <div className="font-semibold text-lg text-[#3e4152] font-[ProximaNova,arial,Helvetica Neue,sans-serif] ">
              {element.card.info.name }
              </div>
              <div className="font-normal text-base text-[#3e4152] ">
              ₹{element.card.info.price / 100}
              </div>
              <div className="text-sm ">{element.card.info.description}</div>
            </div>
            <div className=" col-span-1 relative">
              <img
                className="w-full h-full"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${element.card.info.imageId}`}
                alt=""
              />
              <button className="absolute bottom-2 ">Add +</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
