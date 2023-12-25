import { useSelector } from "react-redux";
import ResturantAccordionItem from "./ResturantAccordionItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../utiles/cartSlice";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-[800px] w-full mx-auto">
      <button
        className="px-4 py-2 bg-red-500 text-white"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      <ResturantAccordionItem listitem={cartItem} />
    </div>
  );
};
export default Cart;
