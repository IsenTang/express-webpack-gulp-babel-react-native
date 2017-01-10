'use strict'

import fetch from 'isomorphic-fetch';

export const reducer = (state = 0,action) =>{
    switch (action.type){
        case 'ajax':
            return action.info
        default:
            return state
    }
}

