import React, { useMemo } from 'react'
import styles from './Home.module.css'
import car from '../../../assets/images/car.jpg'
import { cars } from './cars.data.js'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'

const Home = () => {

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm />
            <div>
                {cars.length ?
                    cars.map(car => (
                        <CarItem
                            key={car.id}
                            car={car}
                        />
                    ))
                    :
                    <h2>Машины отсутствуют!</h2>
                }
            </div>
        </div >
    )
}

export default Home