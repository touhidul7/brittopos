import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addProduct } from '../../redux/productSlice';

const ModalForm = () => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productStock, setProductStock] = useState('')
    const [productImage, setProductImage] = useState(null)
    // dispatch
    const dispatch = useDispatch();
    /* Random Number generator */
    const randomNumber = () => {
        const min = 1;
        const max = 100000;
        const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNum;
    }
    const addProductHandler = (e) => {
        e.preventDefault();
        if (productName === '' || productPrice === '' || productCategory === '' || productStock === '' || productImage === '') {
            alert('Please fill all the fields')
        } else {
            dispatch(addProduct({
                id: randomNumber(),
                title: productName,
                price: productPrice,
                category: productCategory,
                thumbnail: productImage,
                stock: productStock,
            }))
            setProductName('');
            setProductPrice('');
            setProductCategory('');
            setProductStock('');
            setProductImage('');
        }
    }
    return (
        <div className="modal-container">
            <form>
                <input onChange={(e) => setProductName(e.target.value)} type="text" placeholder="Product Name" className="input input-bordered input-secondary w-full max-w-xs" value={productName} />
                <br /><br />
                <input onChange={(e) => setProductPrice(e.target.value)} type="number" placeholder="Product Price" className="input input-bordered input-secondary w-full max-w-xs" value={productPrice} />
                <br /><br />
                <select onChange={(e) => setProductCategory(e.target.value)} className="select select-secondary w-full max-w-xs" value={productCategory}>
                    <option disabled selected>Product Category</option>
                    <option value='Smartphones'>Smartphones</option>
                    <option value='Laptops'>Laptops</option>
                    <option value='Fragrances'>Fragrances</option>
                    <option value='Skincare'>Skincare</option>
                    <option value='Groceries'>Groceries</option>
                    <option value='Home-Decoration'>Home-Decoration</option>
                </select>
                <br /><br />
                <input onChange={(e) => setProductStock(e.target.value)} type="number" placeholder="In Stock" className="input input-bordered input-secondary w-full max-w-xs" value={productStock} />
                <br /><br />
                <input onChange={(e) => setProductImage(e.target.files[0])} accept="image/*" type="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />
                <br /><br />
                <button onClick={addProductHandler} className="btn btn-primary">Add Product</button>
            </form>

        </div>
    );
};

export default ModalForm;