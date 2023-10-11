import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../../redux/productSlice';
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const SingleProduct = ({ item }) => {
    const { id, category, title, price, thumbnail } = item;
    const [qty, setQry] = useState(1);
    // dispatch data
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(addToCart({
            id: id,
            name: title,
            image: thumbnail,
            category: category,
            price: price,
            quantity: qty,
        }))}
            className="single-main-container">
            <div className="single-container">
                <div className="product-img">
                    <img src={URL.createObjectURL(thumbnail)} alt={title} />
                </div>
                <div className="product-title">
                    <h5>{title.slice(0, 10)}</h5>
                    <p>{category}</p>
                </div>
                <div className="product-price">
                    <span>{price} $</span>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;