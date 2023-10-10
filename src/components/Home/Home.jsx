import Cart from "../Carts/Cart";
import Products from "../Products/Products";

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="cart-container">
                    <Cart />
                </div>
                <div className="product-container">
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Home;