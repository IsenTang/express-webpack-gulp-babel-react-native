'use strict'
import { createStore } from 'redux';
let reducer = require('../reducer/counterReducer').reducer;

export const store = createStore(reducer);
