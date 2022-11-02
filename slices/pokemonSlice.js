import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    details: [],
    limit: 5,
}
export const pokemonSlice = createSlice({
    name: 'pokemonDetails',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            state.details = action.payload
          },
        setLimit: (state, action) => {
            state.limit = action.payload
          },
    }
})

export const { setDetails, setLimit } = pokemonSlice.actions
  
export const detailsSelector = state => state.details
export const limitSelector = state => state.limit
  
export default pokemonSlice.reducer