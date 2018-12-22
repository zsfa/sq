import React,{Component,Fragment} from 'react'
import AccountSub from "./children/accountsub"
import PhoneSub from "./children/phonesub"


// let reallyDom=(params)=>(Coma,Comb)=>{
// 	return class extends Component{
// 		render(){
// 			return(
// 				params?<Coma/>:<Comb/>
// 			)
// 		}
// 	}
// }
// let Com=reallyDom
class User extends Component{
	constructor(){
		super();
		this.state={
			flag:true
		}
	}

	render(){
		let {flag} = this.state
		return(
			<Fragment>
                <div className="user_tab">
                    <span className="choise_left" onClick={this.handleChoiseA.bind(this)} >账户密码</span>
                    <span className="choise_right" onClick={this.handleChoiseB.bind(this)} >手机验证码</span>
                </div>
				<div className="user_main">
					{flag?<AccountSub/>:<PhoneSub/>}
				</div>
			</Fragment>
		)
	}
	handleChoiseA(){
		this.setState({
			flag:true
		})
	}
	handleChoiseB(){
		this.setState({
			flag:false
		})
	}
}

export default User