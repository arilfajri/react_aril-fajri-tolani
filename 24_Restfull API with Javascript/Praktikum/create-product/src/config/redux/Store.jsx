import { configureStore } from "@reduxjs/toolkit";
import Reducer  from "./Reducer";
import  thunkMiddleware  from "redux-thunk";

const store = configureStore({
  reducer: Reducer,
  middleware: [thunkMiddleware],
})

export default store;
