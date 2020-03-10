import React, { Component } from 'react'
import FilmHeader from "../film-header"
import "./index.scss"
export default class HomePage extends Component {
	render() {
		return (
			<div className="homepage">
				<FilmHeader path={this.props.match.path} />
				<div className="homepage-user">
					<img src="https://img.meituan.net/maoyanuser/80cdf9a184d40eb9ecc0e5d170f3e45d11928.png"/>
					<p>{sessionStorage.getItem("username")}</p>
				</div>
				<div className="order">
					<h4>我的订单</h4>
					<div>
						<div>
							<i className="fa fa-film" aria-hidden="true"></i>
							<span>电影</span>
						</div>
						<div>
							<i className="fa fa-shopping-bag" aria-hidden="true"></i>
							<span>商城</span>
						</div>
					</div>
				</div>
				<ul className="card">
					<li>
						<a href="#" className="xian">
							<span>优惠券</span>
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<span>折扣卡</span>
							<i className="fa fa-angle-right" aria-hidden="true"></i>
						</a>
					</li>
				</ul>
			</div>
		)
	}
}
