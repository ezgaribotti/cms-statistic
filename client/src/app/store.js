import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";

const reducers = combineReducers({
    auth,
});

const store = configureStore({
    reducer: reducers
});

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
