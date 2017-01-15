'use strict'


export const reducer = (state = {result: 'firstTime' },action) =>{
    console.log('ajaxReducer');
    switch (action.type){
        case 'GET_RESULT':
            return action.result
        default:
            return state
    }
}

