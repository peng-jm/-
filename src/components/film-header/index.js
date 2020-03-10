import React, { Component } from 'react'
import "./index.scss"
import {withRouter} from "react-router-dom"
 class FilmHeader extends Component {
	 txt=(path)=>{
		 if(path==="/film"){
			 return <span>猫眼电影</span>
		 }else if(path==="/move"){
			 return <span>影院</span>
		 }else if(path==="/user/homepage"){
			 return <span>我的</span>
		 }
	 }
	render() {
		let {path} = this.props
		console.log(path)
		return (
			<div className="film-header">
					<div>
						{
							this.txt(path)
						}
					</div>
			</div>
		)
	}
}
export default withRouter(FilmHeader)