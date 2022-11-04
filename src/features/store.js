import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rasa/rasaSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;