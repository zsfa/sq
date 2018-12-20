import React,{Component,Fragment} from 'react'
import GoodsBook from './children/goodsBook'
import Header from './children/header'
import {connect} from 'react-redux'
import {goodsBook_action,grilArticle_action} from '../../action/classifyAction/classifyActionCreator'

class Classify extends Component{
	render(){
		let {goodsBookList,girlArticleList} = this.props
		return(
			<Fragment>
			<Header/>
				<section>
					<GoodsBook gbList={goodsBookList} girlList={girlArticleList} 
					handleMore={this.props.getGoodsBookData.bind(this)}
					handleMoreTwo={this.props.getGrilArticleData.bind(this)}/>
				</section>
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getGoodsBookData();
		this.props.getGrilArticleData()
	}
}

const mapStateToProps = (state)=>({
	goodsBookList:state.classify.goodsBookList,
	girlArticleList:state.classify.girlArticleList
})
const mapDispatchToProps = (dispatch)=>({
	getGoodsBookData(){
		dispatch(goodsBook_action())
	},
	getGrilArticleData(){
		dispatch(grilArticle_action())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(Classify)
