'use strict'

import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../reducer/ajaxReducer';

// console.log(reducer);
export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)




