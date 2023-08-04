import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import styles from './Home.module.css'
import car from '../../../assets/images/car.jpg'
import { cars as carsData } from './cars.data.js'
import CarItem from './car-item/CarItem'
import CreateCarForm from './create-car-form/CreateCarForm'
import axios from 'axios'
import { CarService } from '../../../services/car.service'
import { useNavigate } from 'react-router-dom'
import Player from './Player'
import { AuthContext } from '../../../provider/AuthProvider'
import { useQuery } from '@tanstack/react-query'

const Home = () => {
    const { data, isLoading, error } = useQuery(['cars'], () => CarService.getAll())

    const { user, setUser } = useContext(AuthContext)

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <h1>Cars catalog</h1>

            {user ? (
                <>
                    <h2>Welcome, {user.name}!</h2>
                    <button onClick={() => setUser(null)}>Logout</button>
                </>
            ) : (
                <button onClick={() => setUser({ name: 'Olga' })}>Login</button>
            )}


            <CreateCarForm />
            <div>
                {data.length ?
                    data.map(car => (
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