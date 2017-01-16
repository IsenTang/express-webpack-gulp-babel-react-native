'use strict'

import fetch from 'isomorphic-fetch';

    function receivePosts(json){
        console.log(json);
        return {
            type : 'GET_RESULT',
            result:json.data.children.map(child =>child.data)
        }
    }

    function fetchPost(){
        console.log('..............');
        let data = 'frontend';
        return function (dispatch) {
            return fetch(`http://www.subreddit.com/r/${data}.json`)
                .then(response => response.json())
                .then(json =>
                    dispatch(receivePosts(json))
                )
        }
    }

    export function asyncIncrementAction (){
        // console.log(dispatch);
        return (dispatch,getState) => {
            return dispatch(fetchPost());
        }
        // let increment = function asyncIncrement(dispatch,getState){
        //     console.log('increment');
        //     return dispatch(fetchPost());
        // };
        // return increment;
    }
