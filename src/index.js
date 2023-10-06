import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './style.css';
import App from './components/App/App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
    <App />
);
