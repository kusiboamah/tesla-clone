import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: [ "Model S", "Model 3", "Model Y", "Model X" ]
}

const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer