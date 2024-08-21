import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Define base URLs for different environments
const developmentBaseUrl = 'http://localhost:5001/';
const productionBaseUrl = 'https://swifkart-backend.vercel.app/';

// Determine the base URL based on the environment
const baseUrl = window.location.hostname === 'localhost'
  ? developmentBaseUrl
  : productionBaseUrl;

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch", 
    async (id = null, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${baseUrl}products`);
            return response?.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || error.message);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(productsFetch.pending, (state) => {
                state.status = "pending";
                state.error = null;
            })
            .addCase(productsFetch.fulfilled, (state, action) => {
                state.status = "success";
                state.items = action.payload;
                state.error = null; 
            })
            .addCase(productsFetch.rejected, (state, action) => {
                state.status = "rejected";
                state.error = action.payload || action.error.message;
            });
    },
});

export default productsSlice.reducer;
