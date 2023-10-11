/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { decrement, increment, removeCart } from '../../redux/productSlice';

const CartItem = ({ setTotalQty, setTotalPrice }) => {
    const productData = useSelector(state => state.posCart.productData);
    const dispatch = useDispatch();
    useEffect(() => {
        let qtyTemp = 0;
        let totalPrice = 0;
        // total quantity
        productData.map(item => qtyTemp = qtyTemp + item.quantity)
        // total price
        productData.map(item => totalPrice = totalPrice + item.price * item.quantity)
        setTotalQty(qtyTemp)
        setTotalPrice(totalPrice)
    }, [productData])
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>PRODUCT</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                            <th>SUB TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>

                        {productData.length === 0 ? <tr><td colSpan="4" className="text-center">No Product Found</td></tr> :
                            productData.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>
                                            <span>
                                                <button onClick={() => dispatch(decrement({
                                                    id: item.id
                                                }))} className="qty">-</button>
                                            </span>
                                            <span className="qty-number">{item.quantity}</span>
                                            <span>
                                                <button onClick={() => dispatch(increment({
                                                    id: item.id
                                                }))} className="qty">+</button>
                                            </span>
                                        </td>
                                        <td>{item.price} $</td>
                                        <td>{item.price * item.quantity} $</td>
                                        <td>
                                            <button onClick={() => dispatch(removeCart({
                                                id: item.id
                                            }))} className='userButton rounded'>
                                                <span className="material-symbols-outlined p-1 ">
                                                    delete
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default CartItem;