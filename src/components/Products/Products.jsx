import { useState } from 'react';
import ProductHeader from "./ProductHeader";
import { useEffect } from 'react';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {/* Header for product page */}
            <ProductHeader />
            <div className='single-product-container'>
                {
                    products.map((item, i) => <SingleProduct key={i} item={item} />)
                }
            </div>
        </>
    );
};

export default Products;