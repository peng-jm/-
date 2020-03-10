import React, { Component } from 'react'
import "./index.scss"
import { getList3 } from "../../api/request"
export default class MoveList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		getList3().then((res) => {
			if (res.status === 200) {
				this.setState({
					list: res.data
				})
			}
		})
	}
	render() {
		let { list } = this.state
		return (
			<div className="movelist">
				{
					list.map((item) => {
						return <div className="move-list-city" key={item.id}>
							<h3>
								{item.nm}
							</h3>
							<div>
								<span>{item.addr}</span>
								<span>{item.distance}</span>
							</div>
							<div>
								<span>退</span>
								<span>改签</span>
								<span>小吃</span>
								<span>{item.tag.vipTag}</span>
							</div>
							<div>
								<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" />
								<span>{item.promotion.cardPromotionTag}</span>
							</div>
						</div>
					})
				}
			</div>
		)
	}
}
