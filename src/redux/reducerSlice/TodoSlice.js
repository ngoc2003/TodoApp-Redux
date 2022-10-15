const initState = [
  {
    id: 1,
    name: "Learn yoga",
    priority: "Medium",
    completed: false,
  },
  {
    id: 2,
    name: "Learn html",
    priority: "High",
    completed: true,
  },
  {
    id: 3,
    name: "Learn css",
    priority: "Low",
    completed: false,
  },
];
export const TodoReducer = (state = initState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "completedTodo":
      const dataChangeIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      const stateClone = [...state];
      stateClone[dataChangeIndex].completed = action.payload.completed;
      return [...stateClone];
    default: {
      return state;
    }
  }
};
