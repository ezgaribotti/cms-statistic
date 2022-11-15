import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import axios from "axios";
import { SWRConfig } from "swr";
import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = "http://localhost:8000/api";

const fetcher = (...args) => axios.get(...args).then(response => response.data);

root.render(
    <Provider store={store}>
        <SWRConfig value={{ suspense: true, fetcher: fetcher }}>
            <App />
        </SWRConfig>
    </Provider>
);
