import React from 'react';
import {hydrate} from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// @ts-ignore
import { loadableReady } from '@loadable/component';
import {BrowserRouter} from "react-router-dom";

loadableReady(() => {
    hydrate((
        <React.StrictMode>
            <BrowserRouter>
             <App />
            </BrowserRouter>
        </React.StrictMode>
    ), document.getElementById('root'))
})

reportWebVitals();
