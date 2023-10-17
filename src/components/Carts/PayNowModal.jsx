/* eslint-disable react/prop-types */

import { useState } from "react";
import Invoice from "../../invoice/Invoice";

const PayNowModal = ({ totalQty, totalPrice }) => {
    const [show, setShow] = useState(false)
    const payNowHandler = (e) => {
        e.preventDefault();
        console.log('demo');
        setShow(true);
    }
    return (
        <>
            <Invoice show={show} setShow={setShow} />
            <div className="pay-container">
                <form onSubmit={payNowHandler}>
                    <div className="product-history">
                        <div className="row two-block">
                            <div>
                                <label>Receive Amount : </label>
                                <input type="text" value={totalPrice + '$'} className="input input-bordered input-accent w-full max-w-xs" disabled />
                            </div>
                            <div>
                                <label>Paying Amount : </label>
                                <input type="text" value={totalPrice + '$'} className="input input-bordered input-accent w-full max-w-xs" disabled />
                            </div>
                        </div>
                        <div className="row two-block">

                            <div className="change-amount">
                                <label>Change Return : </label>
                                <input type="text" value='0.00 $' className="input input-bordered input-accent w-full max-w-xs" disabled />
                            </div>
                            <div className="payment-type">
                                <label>Select Payment Type : </label>
                                <select className="select select-accent w-full max-w-xs">
                                    <option disabled selected>Select Payment Type</option>
                                    <option value='Cash'>Cash</option>
                                    <option value='Bkash'>Bkash</option>
                                    <option value='Others'>Others</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <label>Note : </label>
                            <textarea className="textarea textarea-accent" placeholder="Enter Notes"></textarea>
                        </div>
                        <div className="row">
                            <label>Payment Status :</label>
                            <select className="select select-accent w-full max-w-xs">
                                <option disabled selected>Select Payment Status</option>
                                <option value='Paid'>Paid</option>
                                <option value='Unpaid'>Unpaid</option>
                            </select>
                        </div>
                        <div className="payNow-submit-button">
                            <button className="btn listButton">Submit</button>
                        </div>
                    </div>
                </form>
                <div className="product-summary">
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
                                    <td>$ 0.00 (0.00 %)</td>
                                </tr>
                                <tr>
                                    <td>Discount</td>
                                    <td>$ 0.00</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td>$ 0.00</td>
                                </tr>
                                <tr>
                                    <td>Grand Total</td>
                                    <td><b>$ {totalPrice}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PayNowModal;