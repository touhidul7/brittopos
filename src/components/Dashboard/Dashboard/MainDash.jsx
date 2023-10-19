import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import OrderAnalytic from "../Analytics/OrderAnalytic";

const MainDash = () => {
    const categoryData = useSelector((state) => state.posCart.category)
    const productData = useSelector((state) => state.posCart.addProduct)
    const orderData = useSelector((state) => state.posCart.payment)
    const [totalSell, setTotalSell] = useState('');
    // total sell
    useEffect(() => {
        let temp = 0;
        orderData.map((item) => temp = temp + item.totalPrice)
        setTotalSell(temp)
    }, [orderData])
    return (
        <div>
            <section>
                <h3 className="section-head">Overview</h3>
                <div className="analytics">
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            visibility
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total Category</h4>
                            <h1>{categoryData.length} Unit</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            eyeglasses
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total Product</h4>
                            <h1>{productData.length} Unit</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            unsubscribe
                        </span></div>
                        <div className="analytic-info">
                            <h4>Total Sell</h4>
                            <h1>{totalSell} $</h1>
                        </div>
                    </div>
                    <div className="analytic">
                        <div className="analytic-icon"><span className="material-symbols-outlined">
                            favorite
                        </span></div>
                        <div className="analytic-info">
                            <h4>Process Order</h4>
                            <h1>{orderData.length} Unit</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                    <div className="graph-card">
                        <h3 className="section-head">Order</h3>
                        <div className="graph-content">
                            <div className="graph-board">
                                <OrderAnalytic/>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
};

export default MainDash;