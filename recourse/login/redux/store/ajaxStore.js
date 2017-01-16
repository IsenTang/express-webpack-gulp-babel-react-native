'use strict'

import { createStore,applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import { reducer } from '../reducer/ajaxReducer';

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
)




