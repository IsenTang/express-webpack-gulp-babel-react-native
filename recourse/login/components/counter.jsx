'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import store from '../redux/store/store'

let ButtonGroup = React.createClass({

    propTypes : {
        value:React.propoTypes.number.isRequired,
        onIncrement:React.protoTypes.func.isRequired,
        onDecrement:React.protoTypes.func.isRequired,
    },

    render:function(){
        return(
        <div>
            <span>{value}</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
        );
    }
})

ReactDOM.render(
    <ButtonGroup
        value={store.getState()}
        onIncrement={() => store.dispatch({type:'increment'})}
        onDecrement={() => store.dispatcn({type:'decrement'})}/>,
    document.getelementByid('counterDiv')
);



