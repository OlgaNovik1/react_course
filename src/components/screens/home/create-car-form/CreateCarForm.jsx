import React, { useState } from 'react'
import styles from './CreateCarForm.module.css'


const clearData = {
    name: '',
    price: '',
    image: '',
}

const CreateCarForm = ({ setCars }) => {
    const [data, setData] = useState(clearData);

    const createCar = (e) => {
        e.preventDefault()
        setCars(prev => [...prev, {
            id: prev.length + 1,
            ...data
        }]);
        setData(clearData);
    }

    return (
        <form className={styles.form}>
            <input
                value={data.name}
                onChange={(e) => setData(prev => ({
                    ...prev, name: e.target.value
                }))}
                placeholder='Enter car name'
            />
            <input
                value={data.price}
                onChange={(e) => setData(prev => ({
                    ...prev, price: e.target.value
                }))}
                placeholder='Enter price'
            />
            <input
                value={data.image}
                onChange={(e) => setData(prev => ({
                    ...prev, image: e.target.value
                }))}
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