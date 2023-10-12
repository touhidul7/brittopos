import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../../redux/productSlice";

const ProductListModal = () => {
    const productList = useSelector(state => state.posCart.addProduct)
    const dispatch = useDispatch();
    return (
        <div>
            <h2 className='mb-4 text-2xl font-bold'>Product List Here</h2>
            <div className="overflow-x-auto">
                <table className="table border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            productList.length === 0 ? "No Product Found" :
                                productList.map((item, i) => {
                                    return (
                                        <tr key={i}>
                                            <th>
                                                <div className="list-img">
                                                    <img src={item.thumbnail} alt={item.title} />
                                                </div>
                                            </th>
                                            <td>{item.title}</td>
                                            <td>{item.category}</td>
                                            <td>{item.price} $</td>
                                            <td>
                                                <button onClick={() => dispatch(removeProduct({
                                                    id: item.id
                                                }))} className='userButton rounded'>
                                                    <span className="material-symbols-outlined p-1 ">
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
        </div>
    );
};

export default ProductListModal;