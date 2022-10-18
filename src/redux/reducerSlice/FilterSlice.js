import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "all",
    priority: [],
  },
  reducers: {
    filterSearch: (state, action) => {
      state.search = action.payload;
    }, // => type: name/filterSearch
    // => filters/filterSearch
    filterStatus: (state, action) => {
      state.status = action.payload;
    },
    filterPrior: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export default filterSlice
