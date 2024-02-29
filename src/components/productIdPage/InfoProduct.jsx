import React, { useState } from 'react'
import { postCartThunk, updateCartThunk } from '../../store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'
import './styles/infoProduct.css'

const InfoProduct = ({ productId }) => {


    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart)

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleLess = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = () => {
        const item = cart.filter(prod => prod.productId===productId.id)
        if (item) {
            dispatch(updateCartThunk(...item, quantity));
        } else {
            dispatch(postCartThunk({
                quantity: quantity,
                productId: productId.id,
            }));
        }
    }

  return (
    <div className='infoProduct'>
        <div>
            <h2>{productId?.brand}</h2>
            <h3>{productId?.title}</h3>
            <p>{productId?.description}</p>
        </div>
        <div className='info__cart'>
            <ul>
                <li>Price</li>
                <li><span>$ {productId?.price}</span></li>
            </ul>
            <div>
                <p>Quantity</p>
                <div className='infoCart__quantity'>
                    <button onClick={handleLess}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handlePlus}>+</button>
                </div>
            </div>
        </div>
        <button className='infoProduct__btn' onClick={handleAddToCart}>Add to Cart<i class='bx bx-cart bx-sm'></i></button>
    </div>
  )
}

export default InfoProduct;