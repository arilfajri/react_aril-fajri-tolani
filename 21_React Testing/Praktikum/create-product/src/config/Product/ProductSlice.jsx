import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listProduct: [{
        id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
        productName: "John",
        productCategory: "Doe",
        radioProduct: "Doe",
        imageProduct: "Doe",
        additionalDescription: "Doe",
        productPrice: "Doe",
    }]
}

const ProductSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            return {
                ...state,
                listProduct: action.payload,
            };
        },
        delete: (state, action) => {
            return {
                ...state,
                listProduct: action.payload,
            };
        },
        update: (state, action) => {
            state.listProduct.map((product) => {
                if (product.id === action.payload.id) {
                    product.productName = action.payload.productName;
                }
            });
        },
    },
});

export default ProductSlice;
