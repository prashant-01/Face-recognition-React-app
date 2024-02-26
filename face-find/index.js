import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './src/App';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot( document.getElementById("root") );

root.render(
    <BrowserRouter>
        <App/>
        <Toaster/>
    </BrowserRouter>
);