/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { resetData } from "../../redux/productSlice";
import PayNowModal from "./PayNowModal";
import { toast } from "react-toastify";

const CartTotal = ({ totalQty, totalPrice }) => {
    const productData = useSelector(state => state.posCart.productData);
    const dispatch = useDispatch();
    return (
        <>
            <div>
                <div className="cart-details mb-14">
                    <ul className="menu bg-base-100 w-56 rounded-box">
                        <li className="border m-2 "><a>Total QTY : {totalQty}</a></li>
                        <li className="border m-2"><a>Sub Total : $ {totalPrice}</a></li>
                        <li className="border m-2"><a><b>Total : $ {totalPrice}</b></a></li>
                    </ul>
                </div>

                <div className="cart-button">
                    <div className="btm-nav">
                        <button onClick={() => dispatch(resetData())} className="bg-pink-200 text-pink-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="btm-nav-label">Reset Cart</span>
                        </button>
                        <button onClick={() => {
                            productData.length === 0 ? 'disabled' && toast.error('Please Add Items to Cart') : document.getElementById('my_modal_4').showModal()
                        }} className="bg-teal-200 text-teal-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            <span className="btm-nav-label">Pay Now</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* Pay Now Pop Up */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <PayNowModal
                        totalQty={totalQty}
                        totalPrice={totalPrice}
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="ml-3 btn addButton">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default CartTotal;