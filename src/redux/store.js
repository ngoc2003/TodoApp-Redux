import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./reducerSlice/FilterSlice";
import todoListSlice from "./reducerSlice/TodoSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
