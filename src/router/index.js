import React from "react"
import loadable from "react-loadable"
var HomePage = loadable({
	loader:()=>import("../components/homePage"),
	loading:()=><div>loading...</div>
})
var Login = loadable({
	loader:()=>import("../components/login"),
	loading:()=><div>loading...</div>
})
var Sign = loadable({
	loader:()=>import("../components/sign"),
	loading:()=><div>loading...</div>
})
var Film = loadable({
	loader:()=>import("../components/film"),
	loading:()=><div>loading...</div>
})
var Move = loadable({
	loader:()=>import("../components/move"),
	loading:()=><div>loading...</div>
})
var User = loadable({
	loader:()=>import("../components/user"),
	loading:()=><div>loading...</div>
})
var FilmOne = loadable({
	loader:()=>import("../components/filmOne"),
	loading:()=><div>loading...</div>
})
var FilmTwo = loadable({
	loader:()=>import("../components/filmTwo"),
	loading:()=><div>loading...</div>
})
export const router = [
	{
		path:"/film",
		component:Film
	},
	{
		path:"/move",
		component:Move
	},
	{
		path:"/user",
		component:User
	}
]
export const subrouter = [
	{
		path:"/film/filmone",
		component:FilmOne
	},
	{
		path:"/film/filmtwo",
		component:FilmTwo
	},
]
export const home= [
	{
		path:"/user/homepage",
		component:HomePage
	},
	{
		path:"/user/login",
		component:Login
	},
	{
		path:"/user/sign",
		component:Sign
	}
]