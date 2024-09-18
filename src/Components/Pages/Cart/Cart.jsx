import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../../assets/Context/CartContext';
import trash from '../../../assets/homeimg/trashicon.png'

const CartPage = () => {
  const { cartItems,removeFromCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your bag is empty</div>;
  }

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₹', '').replace(',', '')), 0);

  return (
    <div className="cart-page">
      <div className="cart-left">
        <h2>Bag</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.images[0]} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>{item.usage}</p>
                <p className="cart-item-price">{item.price}</p>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                <img src={trash} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="cart-right">
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>Total Price: ₹{totalPrice.toLocaleString()}</p>
          <hr />
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
