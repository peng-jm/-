import axios from "./index"

export const getList = ()=>{
	return axios.get("/list")
}
export const getList2 = ()=>{
	return axios.get("/list2")
}
export const getList3 = ()=>{
	return axios.get("/list3")
}
export const cast = ()=>{
	return axios.get("/cast")
}
export const dataList = ()=>{
	return axios.get("/data")
}