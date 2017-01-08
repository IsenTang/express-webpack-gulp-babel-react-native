'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import {store} from '../redux/store/store'

let value = store.getState();
let onIncrement = store.dispatch({type: 'increment'});
let onDecrement = store.dispatch({type: 'decrement'})

let ButtonGroup = React.createClass({

    propTypes : {
        value:React.PropTypes.number.isRequired,
        onIncrement:React.PropTypes.func.isRequired,
        onDecrement:React.PropTypes.func.isRequired,
    },
    render:function(){
        const { value, onIncrement, onDecrement } = this.props
        return(
        <div>
            <span>{value}</span>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
        );
    }
})



const render = () => ReactDOM.render(
    <ButtonGroup value={store.getState()}
                      onIncrement={() => store.dispatch({ type: 'increment' })}
                      onDecrement={() => store.dispatch({ type: 'decrement' })}/>,
    document.getElementById('counterDiv')
);

render();
store.subscribe(render);


