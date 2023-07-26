import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'

const CreateCarForm = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const createCar = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.form}>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter car name'
            />
            <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder='Enter price'
            />
            <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder='Enter image'
            />
            <button
                onClick={(e) => createCar(e)}
                className={styles.btn}
            >
                Create
            </button>
        </form>
    )
}

export default CreateCarForm