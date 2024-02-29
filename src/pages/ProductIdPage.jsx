import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import InfoProduct from '../components/productIdPage/InfoProduct';
import useFetch from '../hooks/useFetch';
import SimilarItems from '../components/productIdPage/SimilarItems';
import SliderImages from '../components/productIdPage/SliderImages';
import './styles/productIdPage.css'

const ProductIdPage = () => {

  const [ productId, getProductId ] = useFetch();
  const param = useParams();

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
    getProductId(url);
  }, [param]);

  return (
    <div className='productIdPage'>
      <div className='Slider__info'>
        <SliderImages
          images={productId?.images}
        />
        <InfoProduct
          productId={productId}
        />
      </div>
      <SimilarItems
        categoryId={productId?.categoryId}
        prodId={param.id}
      />
    </div>
  )
}

export default ProductIdPage;