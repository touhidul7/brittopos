
const CartItem = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                            <th>SUB TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Cy Ganderton</td>
                            <td>
                                <span>
                                    <button className="qty">+</button>
                                </span>
                                <span className="qty-number">1</span>
                                <span>
                                    <button className="qty">-</button>
                                </span>
                            </td>
                            <td>Blue</td>
                            <td>10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartItem;