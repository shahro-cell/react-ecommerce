import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import cF from 'currency-formatter';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';

export const Details = () => {
    const [quantities, setQuantities] = useState(1);
    const {id} = useParams();
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    console.log(product);

    useEffect(()=>{
        dispatch({type: 'PRODUCT', id});
    }, [id])
    return (
        <div className='container mt-100'>
            <div className='row'>
                <div className='col_6'>
                    <div className='details_image'>
                        <img src={`/images/${product.image}`} alt='product_img'/>
                    </div>
                </div>
                <div className='col_6'>
                    <div className='details_name'>
                        {product.name}
                    </div>
                <div className='details_prices'>
                    <span className='details_actual'>{cF.format(product.price, {code: 'USD'})}</span>
                    <span className='details_discount'> {cF.format(product.discountPrice, {code: 'USD'})} </span>
                </div>
                <div className='details_info'>
                    <div className='details_in_dec'>

                        <span className='dec' onClick={()=>{ if(quantities > 1){ return setQuantities(quantities -1)}}}> <RemoveSharpIcon /> </span>
                        <span className='quantity'> {quantities} </span>
                        <span className='inc' onClick={()=> setQuantities(quantities +1)}> <AddSharpIcon /> </span>
                        <button className='btn_cart' onClick={()=> dispatch({type: 'ADD_TO_CART', payload: {product, quantities}})}> add to cart </button>

                    </div>
                </div>
                <div className='details_p'>
                <h4> Details </h4>
                    {product.desc}
                </div>
                </div>
            </div>
        </div>
    )
}
