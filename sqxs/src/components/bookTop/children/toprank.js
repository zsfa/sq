import React,{Component} from "react"
import {connect} from "react-redux"
import {rank_get_action} from "../../../action/topaction"
 class TopRank extends Component{
    render(){
        return (
          <header>
			<span className="iconfont">&#xe604;</span>
			<i>精品畅销</i>
			<b className="iconfont">&#xe620;</b>
		  </header>
        )
    }
	componentDidMount(){
		this.props.getRankData()
	}
}
const mapStateToProps = (state)=>({
    
})

const mapDispatchToProps = (dispatch)=>({
   getRankData(){
   	dispatch(rank_get_action())
   }
})
export default connect(mapStateToProps,mapDispatchToProps)(TopRank)