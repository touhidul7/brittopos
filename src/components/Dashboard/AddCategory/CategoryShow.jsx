import { useDispatch, useSelector } from "react-redux";
import { removeCategory } from "../../../redux/productSlice";

const CategoryShow = () => {
    const categoryData = useSelector((state) => state.posCart.category)
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className="text-2xl mb-5 font-bold mt-20">Category List</h1>
            <div className="overflow-x-auto shadow-xl">
                <table className="table border ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            categoryData.length === 0 ? <tr><td colSpan={3} className="text-center">No Category Found</td></tr> :
                                categoryData.map((item, i) => {
                                    return (
                                        <tr key={i} className="bg-base-100">
                                            <th>{i + 1}</th>
                                            <td>{item.name}</td>
                                            <td>
                                                <button onClick={() => dispatch(removeCategory({
                                                    name: item.name,
                                                }))}>
                                                    <span className="material-symbols-outlined listButton p-1 rounded">
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

export default CategoryShow;