'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import {incrementAction} from '../redux/action/action';
import {Provider,connect} from 'react-redux';
import {store} from '../redux/store/counterStore';


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


class ButtonGroup extends React.Component {
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


const App = connect(mapStateToProps,mapDispatchToProps)(ButtonGroup);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('newCounterDiv')
)



