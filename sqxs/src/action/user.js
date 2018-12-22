export const get_user_action=(username)=>({
    type:"GET_USER_MESSAGE",
    payload:new Promise(resolve=>{
        let url="http://localhost:3000/submit?uname="+username
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
        })
    })
})