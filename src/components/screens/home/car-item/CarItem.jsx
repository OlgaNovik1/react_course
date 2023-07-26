import React from 'react'
import styles from '../Home.module.css'

const CarItem = ({ car }) => {
    return (
        <div key={car.id} className={styles.item}>
            <img src={car.image} className={styles.car} />
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <p>{new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD',
                }).format(car.price)}
                </p>
                <button>Read more</button>
            </div>
        </div>
    )
}

export default CarItem