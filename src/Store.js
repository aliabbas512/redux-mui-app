// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { thunk } from "redux-thunk";
// import taskReducer from "./reducers/taskReducer";
// create the Redux store

// const store = createStore(
//     taskReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
// set up Redux Store

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;