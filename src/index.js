import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Импортируем Provider из react-redux
import App from './App';
import store from './redux/store'; // Импортируем созданный Redux store

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Provider store={store}>  {/* Оборачиваем приложение в Provider */}
            <App />
        </Provider>
    </React.StrictMode>
);
