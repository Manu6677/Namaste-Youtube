import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload); // it will merge the payload and state (both objects)
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
