'use strict'

import fetch from 'isomorphic-fetch';

    function receivePosts(data,json){
        return {
            type : 'GET_RESULT',
            data:data,
            result:json.data.children.map(child =>child.data)
        }
    }

    function fetchPost(data){
        return function (dispatch) {
            return fetch(`http://www.subreddit.com/r/${data}.json`)
                .then(response => response.json())
                .then(json =>
                    dispatch(receivePosts(data,json))
                )
        }
    }

    export function asyncIncrementAction (data){
        return (dispatch,getState) => {
            return dispatch(fetchPost(data));
        }
    }