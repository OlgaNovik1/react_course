import React from 'react'
import styles from './Home.module.css'
import car from '../../../assets/images/car.jpg'

const Home = () => {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                <div className={styles.item}>
                    <img src={car} className={styles.car} />
                    <div className={styles.info}>
                        <h2>Car 1</h2>
                        <p>$100 00</p>
                        <button>Read more</button>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home