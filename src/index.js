import React from 'react';
//import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import './style.css';
import App from './components/App/App.jsx';
import { store } from './store/index.jsx';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
