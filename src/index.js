// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Подразумевается, что ваш главный компонент называется App

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
