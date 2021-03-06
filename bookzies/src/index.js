import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import './css/index.css';
const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}><App/></Provider>
    ,
    document.querySelector("#root")
)