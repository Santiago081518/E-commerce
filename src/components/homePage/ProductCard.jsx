import React from 'react'
import '../homePage/styles/productCard.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { postCartThunk } from '../../store/slices/cart.slice';

const ProductCard = ({ prod }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleView = () => {
    navigate(`/product/${prod.id}`)
  }

  const handleAddToCart = () => {
    dispatch(postCartThunk({
        quantity: '1',
        productId: prod.id,
    }));
}

  return (
    <article className='product__card'>
      <figure onClick={handleView} className='productCard__img'>
        <img src={prod.images[0].url} alt="product image" />
        <img src={prod.images[1].url} alt="product image" />
      </figure>
      <hr />
      <ul className='productCard__info'>
        <li><span>{prod.brand}</span><span>{prod.title}</span></li>
        <li><span>Price</span><span>$ {prod.price}</span></li>
      </ul>
      <div className='product__buttons'>
        <button onClick={handleAddToCart}><i class='bx bx-cart bx-sm'></i></button>
      </div>
    </article>
  )
}

export default ProductCard