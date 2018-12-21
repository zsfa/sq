import {fetch} from "whatwg-fetch"
export const top_get_action=()=>({
    type:"TOP_GET",
    payload:new Promise(resolve=>{
        let url="/eva_bookstore/v1/stencil/query?appId=1&pageId=4&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1545286479&type=2&resetcache=&sign=1ACD8AF6FE9DEDA03E65BD8259443B1B&key=shuqiapi&_=1545286479827"
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
			console.log(data)
			resolve(data)
        })
    })
})
export const rank_get_action=()=>({
    type:"RANK_GET",
    payload:new Promise(resolve=>{
        let url="/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=2&type=1&shuqi_h5=&_=1545311777928"
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
			resolve(data)
        })
    })
})
export const man_get_action=()=>({
    type:"RANK_MAN_GET",
    payload:new Promise(resolve=>{
        let url="/novel/i.php?do=is_novelrank&p=1&page=1&size=10&onlyCpBooks=1&gender=1&type=1&shuqi_h5=&_=1545390324703"
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
			resolve(data)
        })
    })
})