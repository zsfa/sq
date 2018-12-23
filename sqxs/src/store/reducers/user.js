const defaultState={
    userMsg:[
        {
            id:"",
            uname:"",
            upwd:""
        }
    ],
    return:""
}
export default (state=defaultState,action)=>{
    switch(action.type){
        case "GET_USER_MESSAGE_FULFILLED":
        let userState=JSON.parse(JSON.stringify(state))
        userState.userMsg=action.payload
        console.log(action.payload)
        return userState;
        case "SET_USER_MESSAGE_FULFILLED":
        let regState=JSON.parse(JSON.stringify(state))
        regState.return=action.payload
        console.log(action.payload)
        return regState
    }
    return state
}
