const defaultState = {
   dataSrc:{
    module:[]
   }
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "TOP_GET_FULFILLED":
        let topState = JSON.parse(JSON.stringify(state));
		console.log(action.payload.data)
        topState.dataSrc = action.payload.data;
        return topState;
	case "RANK_GET_FULFILLED":
		let rankState = JSON.parse(JSON.stringify(state));
		console.log(action.payload.data)
		rankState.dataSrc = action.payload.data;
		return rankState;
    }
    return state;
	}
	