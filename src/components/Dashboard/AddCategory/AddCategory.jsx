import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCategory } from "../../../redux/productSlice";
import CategoryShow from "./CategoryShow";

const AddCategory = () => {
    const [category, setCategory] = useState('');
    const dispatch = useDispatch();

    const addCategory = (e) => {
        e.preventDefault();
        dispatch(addToCategory({
            name: category,
        }))
        setCategory('');
    }
    return (
        <div>
            <h1 className="text-2xl mb-5 font-bold ">Add Category</h1>
            <form onSubmit={addCategory}>
                <div className="join">
                    <input onChange={(e) => setCategory(e.target.value)} className="input input-bordered join-item" placeholder="add category" value={category} required />
                    <button type="submit" className="btn join-item rounded-r-full homeButton">Add Category</button>
                </div>
            </form>
            {/* Cateogyr Show */}
            <CategoryShow />
        </div>
    );
};

export default AddCategory;