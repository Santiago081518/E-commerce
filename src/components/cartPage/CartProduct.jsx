import React, { useState } from 'react';
import './styles/cartProduct.css';
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({ prod }) => {

    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(deleteCartThunk(prod.id));
    };

    const handleLess = () => {
      if (prod.quantity > 1) {
        dispatch(updateCartThunk(prod, -1))
      }
    };

    const handlePlus = () => {
      dispatch(updateCartThunk(prod, 1))
    };

    return (
        prod.product &&
            <div className='cartProduct'>
                <figure>
                    <img src={prod.product.images[0].url} alt='product images' />
                </figure>
                <div>
                    <h2>{prod.product.title}</h2>
                    <div>
                      <button onClick={handleLess}>-</button>
                      <span>{prod.quantity}</span>
                      <button onClick={handlePlus}>+</button>
                    </div>
                    <h3>Price Product: $ {prod.product.price}</h3>
                </div>
                <button onClick={handleRemove}>Delete</button>
            </div>
    );
};

export default CartProduct;
