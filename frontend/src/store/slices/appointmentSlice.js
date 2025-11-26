import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "appointments",
  initialState: { items: [] },
  reducers: {
    setAppointments(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setAppointments } = slice.actions;
export default slice.reducer;
