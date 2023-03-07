import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


import './index.css';
import App from './App';
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.css';
import './18n';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Suspense>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

