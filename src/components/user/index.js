import React, { Component } from 'react'
import {home} from "../../router"
import {Route,Switch,Redirect} from "react-router-dom"
export default class User extends Component {
	render() {
		return (
			<div>
				<Switch>
				{
					home.map((item)=>{
						return <Route key={item.path} path={item.path} component={item.component} {...this.props}/>							
					})
				}
				<Redirect from="/user" to={sessionStorage.getItem("username")?"/user/homepage":"/user/login"}/>
				</Switch>
			</div>
		)
	}
}
