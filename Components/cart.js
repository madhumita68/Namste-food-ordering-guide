import { useCart } from "../context/cartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  console.log("CART ITEMS:", cartItems);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + (item.price || 0) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Add some delicious food from the menu!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      
      <h1 className="cart-title">🛒 Your Cart</h1>

      <p className="cart-items-count">
        {totalItems} items in your cart
      </p>
     

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>

          <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
          alt={item.name}
          className="cart-item-img"
          />

          <div className="cart-item-details">
            <h2>{item.name}</h2>

            <p>
              ₹{item.price ? item.price / 100 : 0}
            </p>

            <div className="quantity-controls">
              <button
                onClick={() => decreaseQuantity(item.id)}
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
              >
                +
              </button>
            </div>
          </div>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h2>Cart Summary</h2>

        <p>
          Total Items: <strong>{totalItems}</strong>
        </p>

        <h2>
          Total: ₹{totalAmount / 100}
        </h2>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;