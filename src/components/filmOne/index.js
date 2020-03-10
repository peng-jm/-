import React, { Component } from 'react'
import "./index.scss"
import {cast,dataList} from "../../api/request"
import { List,} from 'antd';
export default class FilmOne extends Component {
	constructor(props){
		super(props);
		this.state={
			list:[],
			data:[]
		}
	}
	componentDidMount(){
		cast().then((res)=>{
			if(res.status===200){
				this.setState({
					list:res.data
				})
			}
		})
		dataList().then((res)=>{
			if(res.status===200){
				this.setState({
					data:res.data
				})
			}
		})
	}
	render() {
		let {list,data} = this.state
		return (
			<div  className="filmone">
				<div className="hot">
					<h3>热门影人</h3>
					<ul className="cast">
						{
							list.map((item)=>{
								return <li key={item.id}>
										<a href={item.href}>
											<img src={item.img}/>
											<h5>{item.name}</h5>
										</a>
									</li>
							})	
						}
					</ul>
				</div>
				<div className="hotspot">
						<h3>娱乐热点</h3>
						<List
						bordered
						dataSource={data}
						renderItem={item => (
							<List.Item>
							<a href={item.href} style={{marginBottom:".2rem",display:"block",fontSize:".3rem",fontWeight:"300"}}>
								<p style={{whiteSpace:"nowrap",overflow: "hidden",textOverflow: "ellipsis",width: "95%"}}>{item.txt}</p>
							</a>
							</List.Item>
						)}
						/>										
				</div>
			</div>
		)
	}
}
