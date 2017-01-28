'use strict'

import fetch from 'isomorphic-fetch';

    function receivePosts(json){
        console.log('receivePosts');
        console.log(json);
        console.log(json.data.children.map(child =>child.data));
        return {
            type : 'GET_RESULT',
            result:json.data.children.map(child =>child.data)
        }
    }




    export const fetchPosts = () => (dispatch, getState) => {
        return fetch(`http://www.subreddit.com/r/frontend.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(json)));
    };
