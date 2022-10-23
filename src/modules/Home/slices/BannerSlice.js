import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from "../../../apis/movieAPI"
const initialState = {
    banners: [],
    isLoading: false,
    error: null,
}

export const getBanners = createAsyncThunk(
    "home/banner/getBanners",
    async (_,{rejectWithValue}) => {
        try {
            const data = await movieAPI.getBanners()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const bannerSlice = createSlice(
    {name: "home/banner", 
    initialState, 
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(getBanners.pending, (state)=>{state.isLoading = true});
        builder.addCase(getBanners.fulfilled, (state, {payload})=>{ state.isLoading = false ; state.banners = payload});
        builder.addCase(getBanners.rejected, (state, {payload})=>{ state.isLoading = false ; state.error = payload});
    }
}
)

export default bannerSlice.reducer;
