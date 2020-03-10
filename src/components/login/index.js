import React, { Component } from 'react'
import { connect } from "react-redux"
import "./index.scss"
class Login extends Component {
	deng = () => {
		if (this.username.value === sessionStorage.getItem("username")) {
			this.props.history.push("/user/homepage")
		}
	}
	go = () => {
		this.props.history.push("/user/sign")
	}
	render() {
		return (
			<div className="login">
				<div className="login-one">
					<span>猫眼电影</span>
				</div>
				<div className="login-two">
					<div>
						用户名：<input type="txt" ref={(node) => (this.username = node)} />
					</div>
					<div>
						密码：<input type="password" ref={(node) => this.password = node} />
					</div>
					<div className="button">
						<div onClick={this.deng}>登录</div>
						<div onClick={this.go}>注册一下</div>
					</div>
				</div>
			</div>
		)
	}
}
var mapState = (state) => {
	return {
		state
	}
}
export default connect(mapState)(Login)