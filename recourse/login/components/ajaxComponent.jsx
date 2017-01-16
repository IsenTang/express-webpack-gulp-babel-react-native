'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../redux/store/ajaxStore'
import { Provider,connect } from 'react-redux';
import { asyncIncrementAction } from '../redux/action/ajaxAction';


function mapStateToProps(state){
    return {
        value : state.result
    }
}

function mapDispatchToProps(dispatch){
    return {
        onAjax : () => dispatch(asyncIncrementAction)
    }
}

let AjaxButton = React.createClass({

        // componentDidMount:function(){
        //     const { dispatch } = this.props;
        //     dispatch(ajaxPost('firstTime'));
        // },
        // handleClick(obj){
        //     console.log(obj);
        //     dispatch(asyncIncrementAction(obj.data-value));
        // },
        render : function(){
            const {value,onAjax} = this.props;
            return(
                <div>
                    <span>{value}</span>
                    <button onClick={onAjax}>test</button>
                </div>
            )
        }
    }
)



    let App = connect(mapStateToProps,mapDispatchToProps)(AjaxButton);

    ReactDOM.render(
        <Provider store={ store }>
            <App/>
        </Provider>,
        document.getElementById('ajaxDiv')
    )





