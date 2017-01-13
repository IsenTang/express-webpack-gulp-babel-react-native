'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from '../redux/store/ajaxStore'
import { Provide,connect } from 'react-redux';
import { asyncIncrementAction } from '../redux/action/ajaxAction';

let AjaxButton = React.createClass({

        // componentDidMount:function(){
        //     const { dispatch } = this.props;
        //     dispatch(ajaxPost('firstTime'));
        // },
        handleClick(obj){
            console.log(obj);
            dispatch(asyncIncrementAction(obj.data-value));
        },
        render : function(){
            const {value,onAjax} = this.prop;
            return(
                <div>
                    <span>{value}</span>
                    <button data-value="frontend" onClick={this.handleClick(this)}>test</button>
                </div>
            )
        }
    }
)

    function mapStateToProps(state){
        return {
            value : state.result
        }
    }
    //
    // function mapDispatchToState(dispatch){
    //     return {
    //         onAjax : () => dispatch(asyncIncrementAction)
    //     }
    // }

    let App = connect(mapStateToProps/*,mapDispatchToState*/)(AjaxButton);

    let render = () =>ReactDOM.render(
        <Provide store={ store }>
            <App/>
        </Provide>,
        document.getElementById('ajaxDiv')
    )

    render();

