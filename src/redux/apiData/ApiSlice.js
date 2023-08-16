import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../constants/apiUrls";
import { INITIAL_STATE } from "./ApiInitial";

export const getShoppingData = createAsyncThunk(
  "todoList/getTodos",
  async () => {
    let response = await fetch(API_URL);
    let json = await response.json();
    // console.log(json);
    return json;
  }
);

const shoppingDataSlice = createSlice({
  name: "todoList",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getShoppingData.pending, (state, action) => {
      state.status = "Fetching data. Please wait a moment...";
      // Update state with the fetched todo
    });

    builder.addCase(getShoppingData.fulfilled, (state, action) => {
      //If we have to totally replace the existing array:
      state.todos = action.payload;

      //if we want to add the json to an existing array
      let updatedTodos = state.todos.concat(action.payload);
      state.todos = updatedTodos;
      state.status = null;
    });

    builder.addCase(getShoppingData.rejected, (state, action) => {
      state.status = "Failed to fetch data...";
    });
  },
});

export default shoppingDataSlice.reducer;
