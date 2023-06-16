import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {products.map((product) => (
          <div className="cartCard" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleDelete(product.id)}>
              Remove from cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
