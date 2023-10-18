import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addProduct } from '../../redux/productSlice';

const ModalForm = () => {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [productStock, setProductStock] = useState('')
    const [productImage, setProductImage] = useState('')
    // get category data
    const categoryData = useSelector((state) => state.posCart.category)
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
            alert('Please add category')
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
            <h2 className='mb-4 text-2xl font-bold'>Product Add Here</h2>
            <form onSubmit={addProductHandler}>
                <input onChange={(e) => setProductName(e.target.value)} type="text" placeholder="Product Name" className="input input-bordered input-secondary w-full max-w-xs" value={productName} required />
                <br /><br />
                <input onChange={(e) => setProductPrice(e.target.value)} type="number" placeholder="Product Price" className="input input-bordered input-secondary w-full max-w-xs" value={productPrice} required />
                <br /><br />
                <select onChange={(e) => setProductCategory(e.target.value)} className="select select-secondary w-full max-w-xs" value={productCategory} required>
                    <option disabled>Product Category</option>
                    {
                        categoryData.map((item, i) => {
                            return <option key={i} value={item.name}>{item.name}</option>

                        })
                    }
                </select>
                <br /><br />
                <input onChange={(e) => setProductStock(e.target.value)} type="number" placeholder="In Stock" className="input input-bordered input-secondary w-full max-w-xs" value={productStock} required />
                <br /><br />
                <input onChange={(e) => setProductImage(e.target.value)} type="url" placeholder=' Upload image URL' className="file-input file-input-bordered file-input-secondary w-full max-w-xs" value={productImage} required />
                <span>
                    <img style={{ height: '150px', width: '150px', objectFit: 'cover', borderRadius: '5px', marginTop: '15px' }} src={productImage ? productImage : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'} alt={productName} />
                </span>
                <br />
                <button type='submit' className="btn btn-primary">Add Product</button>
            </form>

        </div>
    );
};

export default ModalForm;