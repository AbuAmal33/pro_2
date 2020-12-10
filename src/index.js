import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from "react-redux";
import './style.css'
import store from "./redux";

ReactDOM.render(
    <Provider store={store}>
        <div className={'fon'}>
            <App />
        </div>
    </Provider>,

  document.getElementById('root')
);
