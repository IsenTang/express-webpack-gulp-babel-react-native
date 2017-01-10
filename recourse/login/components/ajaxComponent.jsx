'use strict'
import React from 'react';
import ReactDOM from 'react-dom';


let AjaxButton = React.createClass({
      render : function(){
          const {value,onAjax} = this.prop;
          return(
              <div>
                  <span>{value}</span>
                  <button onClick={onAjax}>test</button>
              </div>
          )
      }
    }
)

let render = () =>ReactDOM.render(
    <AjaxButton/>,
    document.getElementById('ajaxDiv')
)

