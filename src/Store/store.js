import { createSlice, configureStore } from "@reduxjs/toolkit";

const memeInitialState = {
  _id: 1,
  text_1: "",
  text_2: "",
};

const memeSlice = createSlice({
  name: "color",
  initialState: memeInitialState,
  reducers: {
    setId(state, action) {
      state._id = action.payload;
    },
    setText1(state, action) {
      state.text_1 = action.payload.text_1;
    },
    setText2(state, action) {
      state.text_2 = action.payload.text_2;
    },
  },
});

const store = configureStore({
  reducer: {
    meme: memeSlice.reducer,
  },
});

export const memeActions = memeSlice.actions;

export default store;
