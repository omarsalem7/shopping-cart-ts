import './cart.css';
import { ItemType } from '../utilities/@types';
import { cartItemName } from '../utilities/cartItemsHelper';

type cartProp = {
  toggle: () => void;
  items: ItemType[];
};
const CartDropdown = ({ toggle, items }: cartProp) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.length ? (
        items.map((item) => (
          <div className="flex justify-between">
            <p>{cartItemName(item.id)}</p>
            <p>{item.quantity}</p>
            <hr></hr>
          </div>
        ))
      ) : (
        <span className="empty-message"> Your cart is empty </span>
      )}
    </div>
    <button onClick={() => toggle()}>GO TO CHECKOUT</button>
  </div>
);

export default CartDropdown;
