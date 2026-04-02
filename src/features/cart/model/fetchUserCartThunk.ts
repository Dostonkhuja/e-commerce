import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserCart } from "../index";

export const fetchUserCartThunk = createAsyncThunk(
    "cart/fetchUserCart",
    async (userId: number, thunkAPI) => {
        try {
            const data = await getUserCart(userId);
            return {
                ...data,
                id: userId,
            };
        } catch{
            return thunkAPI.rejectWithValue("Failed to fetch cart");
        }
    }
);