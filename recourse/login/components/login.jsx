'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

let RegisterButton = React.createClass({
    render:function(){
        return(
            <span style={{float:'rigth'}}>
                <a style={{color:'rgb(204,204,204)',marginright:'10px'}} href="#">注册</a>
            </span>
        );
    }
});

let LoginButton = React.createClass({
    render:function(){
        return(
            <p>1111111111</p>
        );
    }
});


ReactDOM.render(
    <RegisterButton />,
    document.getElementById('loginDiv')
);
