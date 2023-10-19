import { useDispatch, useSelector } from "react-redux";
import { removeOrder, resetOrder } from "../../../redux/productSlice";
import ViewOrderList from "./ViewOrderList";
import { useState } from "react";

const Order = () => {
    const orderData = useSelector((state) => state.posCart.payment)
    const dispatch = useDispatch();
    const [invoice, setInvoice] = useState();
    const [search, setSearch] = useState('');
    const [show, setShow] = useState('')

    // view order product list
    const viewOrderList = (invoiceNo) => {
        document.getElementById('view-order').showModal();
        setInvoice(invoiceNo);
    }
    // search invoice 
    setTimeout(() => {

        /*   const searchInvoice = orderData.find((item) => item.invoiceNo === search)
          setShow(searchInvoice) */
    }, 2000)

    console.log(show);


    return (
        <div>
            <h1 className="text-2xl mb-5 font-bold ">Order Info</h1>
            {/* <button disabled onClick={() => dispatch(resetOrder())} className="btn btn-success mb-5">Reset Order List</button> */}

            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder="Find here" className="input input-bordered input-accent w-full max-w-xs" />

            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Invoice</th>
                            <th>Date</th>
                            <th>P.Status</th>
                            <th>P.Type</th>
                            <th>Qty</th>
                            <th>T.Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderData.length === 0 ? <tr><td colSpan={8} className="text-center">No Order Found</td></tr> :
                                orderData.filter((item) =>
                                    item.invoiceNo.includes(search)
                                ).map((item, i) => {
                                    return (
                                        <tr key={i} className="bg-base-100">
                                            <th>{i + 1}</th>
                                            <td><span className="bg-primary p-3 rounded-md text-white">{item.invoiceNo}</span></td>
                                            <td>{item.date}</td>
                                            <td><span className="bg-success p-3 rounded-md">{item.paymentStatus}</span></td>
                                            <td><span className="bg-warning p-3 rounded-md">{item.paymentType}</span></td>
                                            <td>{item.totalQty}</td>
                                            <td>{item.totalPrice} $</td>
                                            <td>
                                                <button onClick={() => viewOrderList(item.invoiceNo)}>
                                                    <span className="material-symbols-outlined homeButton p-1 rounded">
                                                        visibility
                                                    </span>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => dispatch(removeOrder({
                                                    id: item.invoiceNo
                                                }))}>
                                                    <span className="material-symbols-outlined userButton p-1 rounded">
                                                        delete
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                        }

                    </tbody>
                </table>
            </div>
            <dialog id="view-order" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <ViewOrderList invoice={invoice} orderData={orderData} />
                </div>
            </dialog>
        </div>
    );
};

export default Order;