import {fetch} from 'whatwg-fetch'

//精品推荐
export const goodsBook_action = ()=>({
	type:"GOODSBOOK",
	payload:new Promise(reslove=>{
		let url ="/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1545277493&type=2&resetcache=&func_id=24%2C20%2C11%2C19%2C33&orderid=1%2C3%2C4%2C6%2C7&sign=F61FE2158622435DAD73B162EC993C78&key=shuqiapi&_=1545277493169";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			reslove(data)})
	})
})

//女生美文
export const grilArticle_action = ()=>({
	type:"GIRLARTICLE",
	payload:new Promise(reslove=>{
		let url ="/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1545292608&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C11%2C33%2C11%2C19%2C33&orderid=8%2C9%2C10%2C11%2C12%2C13%2C14%2C15%2C16%2C17&sign=0C9790E3C32955E9B624936EF06BC6B1&key=shuqiapi&_=1545292608808";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			reslove(data)})
	})
})

//新书专区
export const newBooks_action = ()=>({
	type:"NEWBOOKS",
	payload:new Promise(reslove=>{
		let url ="/eva_bookstore/v1/module/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1545357622&type=2&resetcache=&func_id=11%2C33%2C11%2C19%2C33%2C12%2C33%2C11%2C19%2C33&orderid=18%2C19%2C23%2C24%2C25%2C26%2C27%2C28%2C29%2C30&sign=27E46DC4B605080B96C21E5208513C56&key=shuqiapi&_=1545357622987";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			reslove(data)})
	})
})