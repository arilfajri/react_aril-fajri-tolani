import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "../Product/ProductSlice";

const reducer = combineReducers({
  product: ProductSlice.reducer,
});

export default reducer;
