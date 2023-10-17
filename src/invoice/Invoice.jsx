/* eslint-disable react/prop-types */

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { resetData } from "../redux/productSlice";

const Invoice = ({ show, setShow, totalQty, totalPrice, paymentType, paymentStatus, tax, discount, shipping }) => {
    const buttonRef = useRef();
    const closRef = useRef();
    const dispatch = useDispatch();
    // for close popup
    const closePop = () => {
        setShow(false);
        dispatch(resetData())
    }
    // for print purpose
    const handlePrint = () => {
        buttonRef.current.style.display = 'none';
        closRef.current.style.display = 'none';
        window.print();
        buttonRef.current.style.display = 'block';
        closRef.current.style.display = 'block';
        dispatch(resetData())
    }
    return (
        <div>
            {
                show ? <div className="ruddromodal" id="ruddropopup">
                    <div className="ruddromodal-content" id="contentToPrint">
                        <span ref={closRef} onClick={closePop} className="ruddroclose" id="ruddrocloseModal">&times;</span>

                        <h2>Invoice</h2>
                        <div className="overflow-x-auto">
                            <table className="table border">
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Total Products</td>
                                        <td><b>{totalQty}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Total Amount</td>
                                        <td>$ {totalPrice}</td>
                                    </tr>
                                    <tr>
                                        <td>Order Tax</td>
                                        <td>$ {tax} %</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>$ {discount} %</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>$ {shipping} %</td>
                                    </tr>
                                    <tr>
                                        <td>Grand Total</td>
                                        <td><b>$ {totalPrice}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Payment Type</td>
                                        <td><b>{paymentType}</b></td>
                                    </tr>
                                    <tr>
                                        <td>Payment Status</td>
                                        <td><b>{paymentStatus}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button ref={buttonRef} onClick={handlePrint} className="btn btn-success mt-5">Print</button>
                    </div>

                </div> : ''
            }
        </div>
    );
};

export default Invoice;