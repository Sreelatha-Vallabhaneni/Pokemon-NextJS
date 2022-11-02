import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import pokemonReducer from './slices/pokemonSlice';
const reducer = combineReducers({
  // here we will be adding reducers
})
const store = configureStore({
  reducer: {
    pokemonData: pokemonReducer
  },
})
export default store;