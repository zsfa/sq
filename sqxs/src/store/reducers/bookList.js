const defaultState = {
	bookLists:[]
}
export default (state=defaultState,action)=>{
	// console.log(action.type)
	switch(action.type){
		case "BOOKLIST_FULFILLED":
			let bookListState = JSON.parse(JSON.stringify(state));
			console.log(action.payload.data)	
			bookListState.bookLists= action.payload.data;
			return bookListState;
	}
	return state;
}