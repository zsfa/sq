import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class Header extends Component{
	render(){
		return (
			<div className="header">
				<Link to="/BookTop"><i className="iconfont">&#xe645;</i></Link>
				<i>精品书单</i>
				<Link to=""><i className="iconfont ">&#xe61d;</i></Link>
			</div>
		)
	}
}

export default Header;