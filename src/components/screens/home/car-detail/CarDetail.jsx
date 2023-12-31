import React, { useState, useEffect, useContext } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { CarService } from '../../../../services/car.service';
import CarItem from '../car-item/CarItem';
import { AuthContext } from '../../../../provider/AuthProvider';
import { withAuth } from '../../../../HOC/withAuth';

const CarDetail = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});


    useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            const data = await CarService.getById(id)

            setCar(data)
        }

        fetchData()
    }, [id])

    if (!car?.name) return <p>Loading ...</p>



    return (
        <div>
            <NavLink to='/'>Back</NavLink>
            <CarItem car={car} />
        </div>
    )
}

export default withAuth(CarDetail) 