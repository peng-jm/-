import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'
import './App.scss';
import {router} from "./router"
import {Switch,Route,Redirect,withRouter,NavLink} from "react-router-dom"
class App extends Component {

  render(){
      return (
      <div className="App">
        <div>
            {/* 被切换的页面 */}
          <Switch>
            {router.map((item)=>{
              return <Route key={item.component} path={item.path} component={item.component}/>
            })}
            <Redirect from="/" to="/film"/>
            </Switch>
        </div>
        
        
        {/* 页面切换按钮 */}
        <div className="menu">
          <div>
            <NavLink className="link" to="/film">
              <i className="fa fa-video-camera fa-lg" aria-hidden="true"></i>
              电影
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/move">
            <i className="fa fa-window-maximize fa-lg" aria-hidden="true"></i>
            影院
            </NavLink>
          </div>
          <div>
            <NavLink className="link" to="/user">
            <i className="fa fa-user-circle-o fa-lg" aria-hidden="true"></i>
            我的
            </NavLink>
          </div>
        </div>
        
      </div>
    );
  }
  
}

export default withRouter (App);
