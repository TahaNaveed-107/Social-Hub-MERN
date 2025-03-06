import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  email: null,
  name: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
      state.email = null;
      state.name = null;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setToken, clearToken, setEmail, setName } = authSlice.actions;
export default authSlice.reducer;
