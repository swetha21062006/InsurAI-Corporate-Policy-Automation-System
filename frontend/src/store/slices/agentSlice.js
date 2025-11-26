import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "agents",
  initialState: { items: [] },
  reducers: {
    setAgents(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setAgents } = slice.actions;
export default slice.reducer;
