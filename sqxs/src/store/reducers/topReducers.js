const defaultState = {
   dataSrc:{
    module:[]
   },
   top:[],
   man:[]
}

export default (state=defaultState,action)=>{
    console.log(action.type)
    switch(action.type){
        case "TOP_GET_FULFILLED":
            let topState = JSON.parse(JSON.stringify(state));
            topState.dataSrc = action.payload.data;
            return topState;
	    case "RANK_GET_FULFILLED":
		    let rankState = JSON.parse(JSON.stringify(state));
            console.log(action.payload)
            rankState.top = action.payload.data;
            return rankState;
        case "RANK_MAN_GET_FULFILLED":
		    let manState = JSON.parse(JSON.stringify(state));
            console.log(action.payload)
            manState.top = action.payload.data;
            return manState;
    }
    return state;
	}
	