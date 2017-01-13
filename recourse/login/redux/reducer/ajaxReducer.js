'use strict'


export const reducer = (state = { },action) =>{
    switch (action.type){
        case 'GET_RESULT':
            return action.result
        default:
            return state
    }
}

