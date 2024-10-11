import { configureStore } from "@reduxjs/toolkit";
import usersDataReducer from "./api/apiSlice";


export const store = configureStore({
    reducer: {data: usersDataReducer}

})