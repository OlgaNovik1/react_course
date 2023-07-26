import React, { useEffect, useMemo, useState } from 'react'
import styles from './Home.module.css'
import car from '../../../assets/images/car.jpg'
import { cars as carsData } from './cars.data.js'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import axios from 'axios'
import { CarService } from '../../../services/car.service'

const Home = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await CarService.getAll()
            setCars(data)
        }

        fetchData()
    }, [])

    return (
        <div>
            <h1>Cars catalog</h1>
            <CreateCarForm setCars={setCars} />
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