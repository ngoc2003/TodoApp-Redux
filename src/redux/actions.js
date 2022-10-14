export const addTodo = (data) => {
  return {
    type: "add",
    payload: data,
  };
};

export const searchFilter = (value) => {
  return {
    type: "filterSearch",
    payload: value,
  };
};

export const statusFilter = (value) => {
  return {
    type: "filterStatus",
    payload: value,
  };
};

export const priorFilter = (value) => {
  return {
    type: "filterPrior",
    payload: value,
  };
};