import React, { Component } from 'react'
import { connect } from "react-redux"
import actionCreator from "../../store/actionCreator"
import store from "../../store"
import "./index.scss"
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible:false
		}
	}
	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				visible:true
			}, () => {
				sessionStorage.setItem("username", this.username.value)
				setTimeout(() => {
					this.props.history.push("/user/login")
				}, 1000)
			})
		})
	}
	sign = () => {
		this.props.dispatch(actionCreator.sign(this.username.value, this.password.value))
	}
	go = () => {
		this.props.history.push("/user/login")
	}
	render() {
		let { visible } = this.state
		return (
			<div className="sign">
				<div className="sign-one">
					<span>
						猫眼电影
					</span>
				</div>
				<div className="sign-two">
					<div>
						用户名：<input type="txt" ref={(node) => (this.username = node)} />
					</div>
					<div>
						密码：<input type="password" ref={(node) => this.password = node} />
					</div>
					<div className="button">
						<div onClick={this.sign}>注册</div>
						<div onClick={this.go}>登录一下</div>
					</div>
					<p className="sign-txt" style={{display:visible?"block":"none"}}>恭喜您注册成功</p>
				</div>
				
			</div>
		)
	}
}
var mapState = (state) => {
	return { state: state }
}
export default connect()(Login)