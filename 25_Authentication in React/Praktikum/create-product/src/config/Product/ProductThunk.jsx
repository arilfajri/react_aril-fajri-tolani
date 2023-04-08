import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const retrieveProduct = createAsyncThunk("product/retrieveProduct", async()=>{
  const res = await axios.get("https://642c551ad7081590f937e674.mockapi.io/products/products")
  return res.data;
})

export const createProduct = createAsyncThunk("product/createProduct", async(param)=>{
  const res = await axios.post("https://642c551ad7081590f937e674.mockapi.io/products/products", param)
  return res.data;
})

export const deleteProduct = createAsyncThunk("product/deleteProduct", async(id)=>{
  const res = await axios.delete(`https://642c551ad7081590f937e674.mockapi.io/products/products/${id}`)
  return res.data;
})

export const updateProduct = createAsyncThunk("product/updateProduct", async(param)=>{
  const res = await axios.put(`https://642c551ad7081590f937e674.mockapi.io/products/products/${param.no}`, param)
  return res.data;
})
