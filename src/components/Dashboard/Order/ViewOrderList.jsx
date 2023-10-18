import { useState } from 'react';
/* eslint-disable react/prop-types */

import { useEffect } from "react";

const ViewOrderList = ({ invoice, orderData }) => {
    const [orderProduct, setOrderProduct] = useState([])

    useEffect(() => {
        const checkingValue = orderData.find(item => item.invoiceNo === invoice)
        if (checkingValue) {
            setOrderProduct(checkingValue.cartData);
        }
    }, [invoice])

    console.log(orderProduct);

    return (
        <div>
            <h2 className='mb-4 text-2xl font-bold'>Product List Here</h2>
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Qty</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            orderProduct.length === 0 ? <tr><td colSpan={3} className="text-center">No Product Found</td></tr> :
                                orderProduct.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>
                                                <div className="list-img">
                                                    <img src={item.image} alt={item.name} />
                                                </div>
                                            </th>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.price} $</td>

                                        </tr>
                                    )
                                })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewOrderList;