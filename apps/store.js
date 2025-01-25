import {configureStore} from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import myFruitReducer from "../slices/userSlice";
const store = configureStore({
    reducer:{
        userInfo:userReducer,
        myFruits:myFruitReducer
    }
})
export default store 