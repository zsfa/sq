const defaultState = {
	goodsBookList:[],
	girlArticleList:[]
}

export default(state=defaultState,action)=>{
	// console.log(action.type)
	switch(action.type){
		case "GOODSBOOK_FULFILLED":
			let goodsBookState = JSON.parse(JSON.stringify(state));
			console.log(action.payload.data.module)
			goodsBookState.goodsBookList = action.payload.data.module[3].content;
			return goodsBookState;
		case "GIRLARTICLE_FULFILLED":
			let girlArticleState = JSON.parse(JSON.stringify(state));
			// console.log(action.payload.data.module[3].content)
			girlArticleState.girlArticleList = action.payload.data.module[3].content;
			return girlArticleState;
	}
	return state;
}

