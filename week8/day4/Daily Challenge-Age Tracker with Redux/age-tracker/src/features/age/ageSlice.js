import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔄 Thunk Actions
export const ageUpAsync = createAsyncThunk(
  "age/ageUpAsync",
  async (_, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    return 1; // increment by 1
  }
);

export const ageDownAsync = createAsyncThunk(
  "age/ageDownAsync",
  async (_, thunkAPI) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    return -1; // decrement by 1
  }
);

// 🧠 Slice
const ageSlice = createSlice({
  name: "age",
  initialState: {
    value: 20,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // ageUpAsync
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })
      // ageDownAsync
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.value += action.payload;
      })
      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
