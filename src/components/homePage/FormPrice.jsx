import React from 'react'
import { useForm } from 'react-hook-form';
import './styles/formPrice.css'

const FormPrice = ({ setFormValue }) => {

    const { handleSubmit, register, reset } = useForm();

    const submit = (data) => {
        setFormValue({
            from: data.from || 0,
            to: data.to || Infinity,
        });
    }

  return (
    <div className='formPrice'>
        <h3>Filter by Price</h3>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="from">From</label>
                <input {...register('from')} id='from' type="number" />
            </div>
            <div>
                <label htmlFor="to">To</label>
                <input {...register('to')} id='to' type="number" />
            </div>
            <button>Filter Price</button>
        </form>
    </div>
  )
}

export default FormPrice;