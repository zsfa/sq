import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import '../../../common/css/classify/details.css'
import {goodsBook_action} from '../../../action/classifyAction/classifyActionCreator'
const qs = require("querystring");

class Details extends Component{
	constructor(){
	    super();
		this.state = {
			bid:'',
			lists:[]
		}
	}
	render(){
		let {bid,lists} = this.state
		console.log(this.props)
		return (
			<Fragment>
				<header className="detailsHeader">
					<Link to="/Classify"><i className="iconfont">&#xe645;</i></Link>
					<i>书籍详情</i>
					<Link to=""><i className="iconfont ">&#xe61d;</i></Link>
				</header>
				<div className="detailsList">
					<ul>
						{
							lists.map((item,index)=>{
								if(item.bid==bid){
									return <li key={index}>
										<div className="details_intr">
											<img src={item.book_cover}/>
											<div className="details_infor">
												<h4>{item.bookname}</h4>
												<p>{item.author_name}</p>
												<p><span>{item.class_name}</span><span>{item.size}</span></p>
												<p>{item.stat_name}</p>
											</div>
										</div>
										<div className="details_con">{item.book_info}</div>
									</li>
								}	
							})
						}
					</ul>
				</div>
			</Fragment>
		)
	}
	componentWillMount(){
		console.log(this.props)
		// var data = qs.parse(this.props.location.search.substring(1))
		// this.state.bid = data.bid
		this.state.bid = this.props.match.params.bid
		this.state.lists = this.props.goodsBookList
		console.log(this.state.lists)
		console.log(this.state.bid)
	}
	componentDidMount(){
		this.props.getGoodsBookData()
	}
}

const mapStateToProps = (state)=>({
	
	goodsBookList:state.classify.goodsBookList
})
const mapDispatchToProps = (dispatch)=>({
	getGoodsBookData(){
		dispatch(goodsBook_action())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Details)