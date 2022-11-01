import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authAPI from "apis/authAPI";

const initialState = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isLoading: false,
	error: null,
};

export const login = createAsyncThunk(
	"authentication/auth/login",
	async (values, { rejectWithValue }) => {
		try {
			const data = await authAPI.login(values);
			localStorage.setItem("user", JSON.stringify(data));
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state) => {
			localStorage.removeItem("user");
			state.user = null;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(login.fulfilled, (state, { payload }) => {
			state.user = payload;
			state.isLoading = false;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			state.error = payload;
			state.isLoading = false;
		});
	},
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
