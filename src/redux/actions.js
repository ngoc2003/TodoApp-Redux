export const addTodo = (data) => {
  return {
    type: "todoList/add",
    payload: data,
  };
};

export const deleteTodo = (data) => {
  return {
    type: "todoList/delete",
    payload: data,
  };
};

export const updateTodo = (data) => {
  return {
    type: "todoList/update",
    payload: data,
  };
};

export const completedTodo = (data) => {
  return {
    type: "todoList/completedTodo",
    payload: data,
  };
};

export const searchFilter = (value) => {
  return {
    type: "filters/filterSearch",
    payload: value,
  };
};

export const statusFilter = (value) => {
  return {
    type: "filters/filterStatus",
    payload: value,
  };
};

export const priorFilter = (value) => {
  return {
    type: "filters/filterPrior",
    payload: value,
  };
};
