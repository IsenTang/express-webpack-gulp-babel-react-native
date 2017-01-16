'use strict'


export const reducer = (state = {result: 'firstTime' },action) =>{
    console.log(action);
    console.log('ajaxReducer');
    switch (action.type){
        case 'GET_RESULT':
            return {result:action.result}
        default:
            return state
    }
}

