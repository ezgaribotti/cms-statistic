import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth";
import global from "./features/global";

const reducers = combineReducers({
    auth,
    global,
});

const store = configureStore({
    reducer: reducers
});

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
