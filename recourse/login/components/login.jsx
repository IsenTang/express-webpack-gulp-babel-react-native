'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,connect } from 'react-redux'

let totalDivStyle = {
    background:'rgb(255,255,255)',
    marginTop:'-100px',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'auto',
    border:'1px solid rgb(231,231,231)',
    borderImage:'none',
    width:'400px',
    height:'200px',
    textAlign:'center'
}

let UsernameInputDivPStyle = {
    paddingTop:'30px',
    paddingLeft:'0px',
    paddingRight:'0px',
    paddingBottom:'10px',
    position:'relative'
}
let UsernameInputDiv = React.createClass({

    render:function(){
        return (
            <p style={UsernameInputDivPStyle}>
                <span className="u_logo"></span>
                <input className="ipt" type="text" name="username" placeholder="请输入用户名或邮箱" />
            </p>
        )
    }
})

let PasscodeInputDiv = React.createClass({
    render:function(){
        return(
            <p style={{position:'relative'}}>
                <span className="p_logo"></span>
                <input className="ipt" id="password" name='password' type="password" placeholder="请输入密码"/>
            </p>
        )
    }
})

let RegisterButton = React.createClass({
    render:function(){
        return(
                <a style={{color:'rgb(204,204,204)',marginRight:'10px'}} href="#">注册</a>
        );
    }
});

let loginButtonStyle={
    background:'rgb(0,142,173)',
    paddingLeft:'10px',
    paddingRight:'10px',
    paddingTop:'5px',
    paddingBottom:'5px',
    borderRadius:'4px',
    border:'1px solid rgb(26,117,152)',
    borderImage:'none',
    color:'rgb(255,255,255)',
    fontWeight:'bold'
};
let LoginButton = React.createClass({
    render:function(){
        return(
            <span style={{float:'right'}}>
                <RegisterButton/>
                <button style={loginButtonStyle}  type="submit">登陆</button>
            </span>
        );
    }
});


let buttonPStyle = {
    marginTop:'0px',
    marginRight:'35px',
    marginLeft:'45px',
    marginBottom:'20px'
}

let ForgetButton = React.createClass({

    render:function(){
        return(
                <span style={{float:'left'}}>
                    <a style={{color:'rgb(204,204,204)'}} href="#">
                        忘记密码
                    </a>
                </span>
        )
    }
});

let buttonDivStyle = {
    height:'50px',
    lineHeight:'50px',
    marginTop:'30px',
    borderTopColor:'rgb(231,231,231)',
    borderTopWidth:'1px',
    borderTopStyle:'solid'
}
let ButtonDiv = React.createClass({
    render:function(){
        return (
            <div style={buttonDivStyle}>
                <p style={buttonPStyle}>
                <ForgetButton  /><LoginButton/>
                </p>
            </div>
        )
    }
});

let TotalDiv = React.createClass({
    render:function(){
        return(
            <div style={totalDivStyle}>
                <form method="post" action="/main">
                <div style={{width:'165px',height:'96px',position:'absolute'}}>
                    <div className="tou"></div>
                    <div className="initial_left_hand" id="left_hand"></div>
                    <div className="initial_right_hand" id="right_hand"></div>
                </div>
                <UsernameInputDiv/>
                <PasscodeInputDiv/>
                <ButtonDiv/>
                </form>
            </div>
        )
    }
})


let App = connect()(TotalDiv);
ReactDOM.render(
    <TotalDiv/>,
    document.getElementById('loginDiv')
);
