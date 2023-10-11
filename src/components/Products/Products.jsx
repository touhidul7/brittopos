//import { useState } from 'react';
import ProductHeader from "./ProductHeader";
//import { useEffect } from 'react';
import SingleProduct from './SingleProduct';
import { useSelector } from 'react-redux';

const Products = () => {
    //const [products, setProducts] = useState([]);
    const products = useSelector(state => state.posCart.addProduct);
    /* useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.products))
            .catch(err => console.log(err))
    }
        , []) */
    return (
        <>
            <ProductHeader />
            {
                products.length === 0 ? 'No Product Found'
                    :
                    <div className='single-product-container'>
                        {products.map((item, i) => <SingleProduct key={i} item={item} />)}
                    </div>
            }


        </>
    );
};

export default Products;