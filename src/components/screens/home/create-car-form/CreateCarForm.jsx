import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CarService } from '../../../../services/car.service';


const CreateCarForm = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
    })

    const queryClient = useQueryClient();

    const { mutate } = useMutation(['create car'], (data) => CarService.create(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('cars')
            reset()
        }
    })

    const createCar = (data) => {
        console.log(data)
        mutate(data);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(createCar)}>
            <input
                {...register('name', { required: 'Name is required' })}
                placeholder='Enter car name' />
            {errors?.name?.message && (<p style={{ color: 'red' }}>required</p>)}

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









