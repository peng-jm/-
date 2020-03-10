import React, { Component } from 'react'
import "./index.scss"
import { Menu ,CaretDownOutlined} from 'antd';
import {subrouter} from "../../router/index"
import {Route,Switch,Redirect} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import FilmHeader from "../film-header"
 class Film extends Component {
	//编程式路由跳转（menu键）
	handleClick = e => {
    this.props.history.push(e.key)
	};


	render() {
		const filmone = this.props.location.pathname==="/film/filmone"
		const filmtwo = this.props.location.pathname==="/film/filmtwo"

		return (<div className="film">
				{/* 头部 */}
				<div className="header">
					<FilmHeader path={this.props.match.path}/>
				
				{/* menu按键，页面切换功能 */}
				<Menu onClick={this.handleClick} className="film-menu">
					<div className="city">
						<a href="#">
							<span>岳阳</span>
							<i className="fa fa-caret-down" aria-hidden="true"></i>
						</a>
					</div>
					<Menu.Item key="/film/filmone" className="film-menu-one" style={{color:filmone?"red":"",borderBottom: filmone?"2px solid red":""}}>
						正在热映
					</Menu.Item>
					<Menu.Item key="/film/filmtwo" className="film-menu-two" style={{color:filmtwo?"red":"",borderBottom: filmtwo?"2px solid red":""}}>
						即将热映
					</Menu.Item>
					<div className="search">
						<a href="#">
							<i className="fa fa-search" aria-hidden="true"></i>
						</a>
						
					</div>
				</Menu>
				</div>
				<Switch>
					{
						subrouter.map((item)=>{
							return <Route key={item.path} path={item.path} component={item.component} />
						})
					}
				<Redirect form="/film" to="/film/filmone"/>>
				</Switch>
			</div>
		)
	}
}
export default Film