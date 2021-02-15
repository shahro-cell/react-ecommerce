import React from 'react';
import {Header} from './Header';
// import {ProductsReducer} from '../store/reducers/ProductsReducer';
import {useSelector} from 'react-redux';
import cF from 'currency-formatter';
import {Link} from 'react-router-dom';

export const Home = () => {
    const {products} =  useSelector(state => state.ProductsReducer);
    // console.log(products);
    return (
        <div>
            <Header />
            <div className='container'>
                <div className='row'>
                    {products.map(product => (
                        <div className='col_3' key={product.id}>
                            <div className='product'> 
                                <div className='product_img'> 
                                   <Link to={`/details/${product.id}`}>
                                   <img src={`/images/${product.image}`} alt='image' />
                                   </Link>
                                </div>
                                <div className='product_name'> 
                                    {product.name}
                                </div>
                                <div className='row'>
                                    <div className='col_6'> 
                                        <div className='product_price'> 
                                         <span className='actual_price'> {cF.format(product.price, {code: 'USD'})}</span>
                                            <span className='discount'>{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className='col_6'> 
                                        <div className='product_discount_price'>
                                            {cF.format(product.discountPrice, {code: 'USD'})}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
