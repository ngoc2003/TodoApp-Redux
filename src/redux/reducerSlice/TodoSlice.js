import { createSlice } from "@reduxjs/toolkit";
function setDataLocalStorage(result) {
  localStorage.setItem("todos", JSON.stringify(result));
}
const todoSlice = createSlice({
  name: "todoList",
  initialState: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
      setDataLocalStorage(state);
    },
    delete: (state, action) => {
      state.splice(action.payload, 1);
      setDataLocalStorage(state);
    },
    update: (state, action) => {
      let index = state.findIndex((item) => item.id === action.payload.id);
      state[index] = {
        ...action.payload,
      };
      setDataLocalStorage(state);
    },
    completedTodo: (state, action) => {
      const dataChangeIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      state[dataChangeIndex].completed = action.payload.completed;
      setDataLocalStorage(state);
    },
  },
});

export default todoSlice
