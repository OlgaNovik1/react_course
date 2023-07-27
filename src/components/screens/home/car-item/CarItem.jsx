import React, { useState } from 'react'
import styles from '../Home.module.css'
import { NavLink } from 'react-router-dom'
import Price from './Price'

const CarItem = ({ car }) => {
    const [count, setCount] = useState(0)


    return (
        <div key={car.id} className={styles.item}>
            <img src={car.image} className={styles.car} />
            <div className={styles.info}>
                <h2>{car.name}</h2>

                <button onClick={() => setCount(prev => prev + 1)}>Изменить count</button>

                <Price price={car.price} />

                <NavLink to={`/car/${car.id}`}>Read more</NavLink>
            </div>
        </div>
    )
}

export default CarItem