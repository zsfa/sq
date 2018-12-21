import {fetch} from 'whatwg-fetch'

export const bookList_action=()=>({
	type:"BOOKLIST",
	payload:new Promise(reslove=>{
		let url ="/novel/i.php?do=is_pay_sdlist&page=1&size=10&shuqi_h5=&onlyCpBooks=1&_=1545401148770";
		fetch(url)
		.then(res=>res.json())
		.then((data)=>{
			reslove(data)})
	})
})