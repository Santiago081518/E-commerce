import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/homePage/ProductCard';
import './styles/homePage.css'
import SelectCategory from '../components/homePage/SelectCategory';
import FormPrice from '../components/homePage/FormPrice';

const HomePage = () => {

  const [productName, setProductName] = useState('')
  const [selectValue, setSelectValue] = useState(0)
  const [formValue, setFormValue] = useState({
    from: 0,
    to: Infinity,
  })

  const products = useSelector(store => store.products);

  const dispatch = useDispatch();

  const textInput = useRef();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    dispatch(getProductsThunk(url));
  }, [])

  const handleSearch = () => {
    setProductName(textInput.current.value.toLowerCase().trim());
  }

  const cbFilter = (prod) => {
    const { from, to } = formValue
    const ByName = prod.title.toLowerCase().includes(productName)
    const ByCategory = +selectValue === 0 ? true : prod.categoryId === +selectValue
    const ByPrice = +prod.price > +from && +prod.price < +to;
    return ByName && ByCategory && ByPrice;
  }

  return (
    <div>
      <div className='filter__name'>
        <input placeholder='Product name' type="text" ref={textInput} onChange={handleSearch}/>
      </div>
      <section className='products__container'>
      <div className='filterContainer'>
        <FormPrice
          setFormValue= {setFormValue}
        />
        <SelectCategory
          setSelectValue={setSelectValue}
        />
      </div>
        {
          products?.filter(cbFilter).map(prod => (
            <ProductCard
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </section>
    </div>
  )
}

export default HomePage;