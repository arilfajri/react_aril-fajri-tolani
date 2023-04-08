import { createSlice } from "@reduxjs/toolkit";
import { retrieveProduct, createProduct, deleteProduct, updateProduct } from "./ProductThunk";

const initialState = {
    listProduct: [],
    type: '',
    isEdit: false
}

const ProductSlice = createSlice({
    name: "product",
    initialState: initialState,
    reducers: {
        setIsEdit: (state, action) => {
            return{
                ...state, isEdit: action.payload
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(retrieveProduct.pending, (state, action) => {
            return {
            ...state,
            };
        })
        .addCase(retrieveProduct.fulfilled, (state, action) => {
            return {
            ...state,
            listProduct: action.payload,
            type: action.type,
            };
        })
        .addCase(retrieveProduct.rejected, (state, action) => {
            return {
            ...state,
            };
        })

        //#region CREATE PRODUCT
        .addCase(createProduct.pending, (state, action) => {
            return {
            ...state,
            createProductLoading: true,
            createProductError: undefined,
            };
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            return {
            ...state,
            createProductLoading: false,
            createProductError: undefined,
            type: action.type,
            };
        })
        .addCase(createProduct.rejected, (state, action) => {
            return {
            ...state,
            createProductLoading: false,
            createProductError: action.payload,
            };
        })
        //#endregion

        //#region delete PRODUCT
        .addCase(deleteProduct.pending, (state, action) => {
            return {
            ...state,
            deleteProductLoading: true,
            deleteProductError: undefined,
            };
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            return {
            ...state,
            deleteProductLoading: false,
            deleteProductError: undefined,
            listProduct: state.listProduct.filter((product) => product.id !== action.payload),
            type: action.type,
            };
        })
        .addCase(deleteProduct.rejected, (state, action) => {
            return {
            ...state,
            deleteProductLoading: false,
            deleteProductError: action.payload,
            };
        })
        //#endregion

        //#region update PRODUCT
        .addCase(updateProduct.pending, (state, action) => {
            return {
            ...state,
            updateProductLoading: true,
            updateProductError: undefined,
            };
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            return {
            ...state,
            updateProductLoading: false,
            updateProductError: undefined,
            type: action.type,
            };
        })
        .addCase(updateProduct.rejected, (state, action) => {
            return {
            ...state,
            updateProductLoading: false,
            updateProductError: action.payload,
            };
        })
        //#endregion
    },
});

export const {setIsEdit} = ProductSlice.actions;
export default ProductSlice;
