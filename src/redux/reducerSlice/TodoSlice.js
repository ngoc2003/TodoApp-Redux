const initState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
export const TodoReducer = (state = initState, action) => {
  switch (action.type) {
    case "add": {
      let result = [...state, action.payload];
      localStorage.setItem("todos", JSON.stringify(result));

      return [...result];
    }
    case "completedTodo":
      const dataChangeIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      let result = [...state];
      result[dataChangeIndex].completed = action.payload.completed;
      localStorage.setItem("todos", JSON.stringify(result));
      return [...result];
    default: {
      return state;
    }
  }
};
