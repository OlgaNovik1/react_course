import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form';


const clearData = {
    name: '',
    price: '',
    image: '',
}

const CreateCarForm = ({ setCars }) => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    })

    const createCar = (data) => {
        console.log(data)
        setCars(prev => [...prev, {
            id: prev.length + 1,
            ...data
        }]);
        reset();
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', { required: 'Name is required' })}
                placeholder='Enter car name' />
            {errors?.name?.message}

            <input
                {...register('price', { required: 'Name is required' })}
                placeholder='Enter price'
            />
            {errors?.name?.message}

            <input
                {...register('image', { required: 'Name is required' })}
                placeholder='Enter image'
            />
            {errors?.name?.message}

            <button
                className={styles.btn}
            >
                Create
            </button>
        </form>
    )
}

export default CreateCarForm

// interface IMan {
//     name: string;
//     height: number;
// }
// let man: IMan = { name: 'Dima', height: 1.78 }

// let man: { name: string, height: number } = { name: 'Dima', height: 1.78 } //не очень вариант



