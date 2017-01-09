'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import {incrementAction} from '../redux/action/action';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {store} from '../redux/store/counterStore';
console.log(store)
function mapStateToProps(state){
    return {
        value : state.count
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrement:() => dispatch(incrementAction)
    }
}

class ButtonGroup extends React.component {
    render (){
        const {value,onIncrement} = this.props
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncrement}>+</button>
            </div>
        )
    }
}

const app = connect(mapStateToProps,mapDispatchToProps)(ButtonGroup);
let render = () => ReactDOM.render(
    <Provider store="{store}">
        <app/>
    </Provider>,
    document.getElementById('newCounterDiv')
)

render();

