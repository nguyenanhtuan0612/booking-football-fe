import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './sass/index.scss';

import App from './components/App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);

reportWebVitals();
