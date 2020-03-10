import axios from 'axios';

var service = axios.create({
    baseURL:"/hd",  //所有的请求都会 带上 /api
    "content-type":"application/json",
    // timeout:5000
})
export default service;