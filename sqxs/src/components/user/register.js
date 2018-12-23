import React,{Component,Fragment} from 'react'
import {connect} from "react-redux"
import {set_user_action} from "../../action/user"
class Register extends Component{
	constructor(){
		super();
		this.state={
            name:"",
            pwd:""
		}
	}

	render(){
		let {name,pwd} = this.state
		return(
			<Fragment>
               <input type="text" value={name} onChange={this.handleName.bind(this)} />
               <input type="text" value={pwd} onChange={this.handlePwd.bind(this)} />
               <button onClick={this.handleSub.bind(this)}>注册</button>
			</Fragment>
		)
    }
    handleName(e){
        let val=e.target.value
        this.setState({
            name:val
        })
    }
    handlePwd(e){
        let val=e.target.value
        this.setState({
            pwd:val
        })
    }
    handleSub(){
        this.props.getRegister(this.state.name,this.state.pwd)
    }
}

const mapStateToProps = (state)=>({
    
  })
  const mapDispatchToProps = (dispatch)=>({
      getRegister(username,userpwd){
          dispatch(set_user_action(username,userpwd))
         
      }
  })
  export default connect(mapStateToProps,mapDispatchToProps)(Register) 