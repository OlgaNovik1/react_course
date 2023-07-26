import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../home/Home"
import CarDetail from "../home/car-detail/CarDetail";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<CarDetail />} path="/car/:id" />
                <Route element={<div>Not found</div>} path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;