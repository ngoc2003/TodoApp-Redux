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
    default: {
      return state;
    }
  }
};
