import React, { Component } from 'react'
import FilmHeader from "../film-header"
import MoveList from "../move-list"
import "./index.scss"
export default class Move extends Component {
	render() {
		
		return (
			<div className="move">
				<header>
					<FilmHeader path={this.props.match.path} />
					<div className="move-search">
						<div className="move-city">
							<a href="#">
								<span>岳阳</span>
								<i className="fa fa-caret-down" aria-hidden="true"></i>
							</a>
						</div>
						<div className="input">
							<i className="fa fa-search" aria-hidden="true"></i>
							<span>搜影院</span>
						</div>

					</div>
					<div className="move-option">
						<div>
							<a href="#">
								<span>全城</span>
								<i className="fa fa-caret-down" aria-hidden="true"></i>
							</a>
						</div>
						<div>
							<span>|</span>
							<a href="#">
								<span>品牌</span>
								<i className="fa fa-caret-down" aria-hidden="true"></i>
							</a>
							<span>|</span>
						</div>
						<div>
							<a href="#">
								<span>特色</span>
								<i className="fa fa-caret-down" aria-hidden="true"></i>
							</a>
						</div>
					</div>
				</header>
				<MoveList/>
			</div>
		)
	}
}
