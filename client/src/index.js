import React from 'react';
import ReactDOM from 'react-dom';
import "./Resources/css/styles.css";

import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, applyMiddleware)(createStore);


ReactDOM.render(
<Provider store = { createStoreWithMiddleware(Reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())}>
<BrowserRouter>
<Routes />
</BrowserRouter>
</Provider>

, document.getElementById('root'));


