'use strict'
import { createStore } from 'redux';
let reducer = require('../reducer/reducer').reducer;

export const store = createStore(reducer);

