import { useState } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    return (
        <>
            <div className="main-cart-container">
                <div className="cart-container">
                    <div className="cart-item">
                        <CartItem setTotalQty={setTotalQty} setTotalPrice={setTotalPrice} />
                    </div>
                    <div className="cart-total">
                        <CartTotal totalQty={totalQty} totalPrice={totalPrice} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;