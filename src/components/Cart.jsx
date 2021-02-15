import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import cF from 'currency-formatter';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RemoveSharpIcon from '@material-ui/icons/RemoveSharp';
import BackspaceSharpIcon from '@material-ui/icons/BackspaceSharp';

export const Cart = () => {
    const {products, totalQuantities, totalPrice} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    // console.log(products);
    return (
        <div className='cart'>
            <div className='container'>
                <h3>Your cart</h3>
                {products.length > 0 ? <>
                    <div className='row'>
                        <div className='col_9'>
                            <div className='cart_heading'>
                                <div className='row'>
                                    <div className='col_2'>Picture</div>
                                    <div className='col_2'>Name</div>
                                    <div className='col_2'>Price</div>
                                    <div className='col_2'>Inc/Dec</div>
                                    <div className='col_2'>Total Price</div>
                                    <div className='col_2'>Category</div>
                                    <div className='col_2'>Remove</div>     
                                </div>
                            </div>
                            {products.map(product => (
                                <div className='row verticalAllign' key={product.id}> 
                                    <div className='col_2'> 
                                        <div className='cart_image'> 
                                            <img src={`/images/${product.image}`} />
                                        </div>
                                    </div>
                                    <div className='col_2'> 
                                        <div className='cart_name'> {product.name} </div>
                                    </div>
                                    <div className='col_2'> 
                                        <div className='cart_price'> 
                                            {cF.format(product.discountPrice, {code: 'USD'})}
                                        </div>
                                    </div>
                                    <div className='col_2'> 
                                        <div className='details_info cart_IncDec'>
                                            <div className='details_in_dec'>

                                                <span className='dec' onClick={()=> dispatch({type: 'DEC', payload: product.id})}> <RemoveSharpIcon /> </span>
                                                <span className='quantity'> {product.quantity} </span>
                                                <span className='inc' onClick={()=> dispatch({type: 'INC', payload: product.id})}> <AddSharpIcon /> </span>

                                             </div>
                                         </div>
                                    </div>
                                    <div className='col_2'> 
                                        <div className='cart_total  text_center'> 
                                            {cF.format(product.discountPrice * product.quantity, {code: 'USD'})}
                                        </div>
                                    </div>
                                    <div className='col_2'> 
                                        <div className='cart_category'> 
                                            {product.category}
                                        </div>
                                    </div>
                                    <div className='col_2'> 
                                        <div className='cart_remove' onClick={()=> dispatch({type: 'REMOVE', payload: product.id})}> 
                                            <BackspaceSharpIcon  />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='col_3 summary_col'>
                            <div className='summary'>
                                <div className='summary_heading'>
                                    Summary
                                </div>
                                <div className='summary_details'>
                                   <div className='row mb_10'>
                                        <div className='col_6'>
                                            Total Items:
                                        </div>
                                        <div className='col_6'> {totalQuantities} </div>
                                   </div>
                                   <div className='row mb_10'>
                                       <div className='col_6'> Total Price </div>
                                       <div className='col_6'> {cF.format(totalPrice, {code: 'USD'})} </div>
                                   </div>
                                   <button type='button' className='checkout'>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : 'Your cart is empty'}
            </div>
        </div>
    )
}













