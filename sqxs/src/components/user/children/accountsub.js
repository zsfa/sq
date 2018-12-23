import React, { Component } from "react"
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from  "react-redux"
import "../../../../node_modules/antd/dist/antd.css"
import "../../../common/css/user/user.css"
import {get_user_action} from "../../../action/user"
const FormItem = Form.Item;
 class AccountSub extends Component {
    constructor(){
        super()
        this.state={
            accountNum:"",
            psdNum:"",
            flag:false,
            test:"",
            pwd:""
        }
    }
    render() {
        let {accountNum,psdNum,test} = this.state
        let {userMsg} = this.props
       
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <FormItem className="acc_inp">
                     <p>账号</p> 
                     {getFieldDecorator('userName', {
                         initialValue: accountNum,
                            rules: [{ required: true, message: '请输入正确的账号' }],
                        })(
                            <Input 
                            //value={accountNum} onChange={this.handleAccound.bind(this)}
                             className="acc_num" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号/邮箱" />
                        )}
                    </FormItem>
                    <span>{test}</span>
                    <FormItem className="psd_inp">
                     <p>密码</p>   
                     {getFieldDecorator('password', {
                         initialValue: psdNum,
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        },
                        // {
                        //         validator: this.checkAccount,
                        // }
                        )(
                              <Input 
                              //value={psdNum} onChange={this.handlePsd.bind(this)}
                              className="psd_num" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                        )}
                    </FormItem>
                    <FormItem className="agree">
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox className="agreement">同意《阿里文学用户服务协议》和《隐私服务协议》</Checkbox>
                        )}
                       
                        <Button 
                        type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                  <a className="login-form-forgot" href="">忘记密码</a>
                        Or <a className="login-form-register" href="">注册</a>
                    </FormItem>
                </Form>
            </div>
        )
    }
    
//     testUser(){
   
// }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.getReturn(values.userName)
                this.setState({
                    pwd:values.password
                })
                
            }
        });
        this.setState({
            flag:true
        })
       
    }
    componentDidUpdate(){
        if(this.state.flag){
            if(this.props.userMsg!==""){
                if(this.props.userMsg[0].uname!==""&&this.state.pwd==this.props.userMsg[0].upwd){
              alert("登陆成功") ;
            }else{
                alert("请输入正确的演示账号密码") ;
                console.log(this.state.pwd)
                console.log(this.props)
                console.log(this.props.userMsg[0].upwd)
            }
            }
            
    }
      //  this.testUser()
    }
}
const mapStateToProps = (state)=>({
  userMsg:state.user.userMsg
})
const mapDispatchToProps = (dispatch)=>({
    getReturn(user){
        dispatch(get_user_action(user))
       
    }
})
const WrappedNormalLoginForm = Form.create()(AccountSub);
export default connect(mapStateToProps,mapDispatchToProps)(WrappedNormalLoginForm) 


    // handleAccound(e){
    //     var val=e.target.value;
    //     var rega=/(^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$)|(^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$) /i
    //     if(rega.test(val)){
    //         this.setState({
    //             flag:true
    //         })
    //     }else{
    //         this.setState({
    //             flag:false
    //         })
    //     }
    // }
    // handlePsd(e){
    //     var val=e.target.value;
    //     var regb=/^[a-zA-Z\d_]{8,}$/
    //     if(regb.test(val)){
    //         this.setState({
    //             flag:true
    //         })
    //     }else{
    //         this.setState({
    //             flag:false
    //         })
    //     }
    // }




