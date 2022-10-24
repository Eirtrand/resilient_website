import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cars: ["R1", "R2", "R3"]
}

const carSlice = createSlice({
	name: "car",
	initialState,
	reducers: {}
})

export const selectCars = state => state.car.cars;

export default carSlice.reducer
