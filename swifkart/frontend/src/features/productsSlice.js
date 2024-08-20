import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFetch = createAsyncThunk(
    "products/productsFetch", 
    async (id = null, { rejectWithValue }) => {
        const response = await axios.get("http://localhost:5000/products");
        return response?.data;
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
            });
    },
});

export default productsSlice.reducer;
