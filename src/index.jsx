import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css"
import Router from "./routes"
import store from "./store/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router />
        </Provider>
    </React.StrictMode>
);
