'use strict'
import { createStore } from 'redux';
let reducer = require('../reducer/reducer').reducer;
import  thunk  from 'redux-thunk';

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);

