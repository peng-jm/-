import React, { Component } from 'react'
import "./index.scss"
import {getList2,getList} from "../../api/request"
export default class FilmTwo extends Component {
	constructor(props){
		super(props);
		this.state={
			filmTwoList:[],
			filmtwoMove:[]
		}
	}
	componentDidMount(){
		getList2().then((res)=>{
			if(res.status===200){
				this.setState({
					filmTwoList:res.data
				})
			}
		})
		getList().then((res)=>{
			if(res.status===200){
				this.setState({
					filmtwoMove:res.data
				})
			}
		})
	}
	render() {
		let {filmTwoList,filmtwoMove} = this.state
		return (
			<div className="filmtwo">
				<div className="filmtwo-hot">
					<h3>近期最受期待</h3>
					<ul className="filmtwo-cast">
						{
							filmTwoList.map((item)=>{
								return <li key={item.id}>
										<a href="#">
											<img src={item.img}/>
											<p style={{whiteSpace:"nowrap",overflow: "hidden",textOverflow: "ellipsis",width: "95%"}}>{item.nm}</p>
											<p>{item.comingTitle}</p>
										</a>
										</li>
							})
						}
					</ul>
				</div>
				<div className="filmtwo-list">
					{
						filmtwoMove.map((item)=>{
							
							return <div key={item.id}>
									<h3>{item.comingTitle}</h3>
									<div className="filmtwo-list-one">
										<div>
											<img src={item.img}/>
										</div>
										<div>
											<h4>{item.nm}</h4>
											<div><span>{item.wish}</span><span>人想看</span></div>
											<div>{item.star}</div>
											<div>{item.rt}上映</div>
										</div>
										<div>
											<a href="#">
												想看
											</a>
										</div>
									</div>
								</div>
						})
					}
					
				</div>
			</div>
		)
	}
}
