import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
    return (
        <>
            <div className="main-cart-container">
                <div className="cart-container">
                    <div className="cart-item">
                        <CartItem />
                    </div>
                    <div className="cart-total">
                        <CartTotal />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;