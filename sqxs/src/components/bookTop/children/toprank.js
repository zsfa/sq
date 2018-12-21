import React,{Component} from "react"
import {connect} from "react-redux"
import BScroll from "better-scroll"
import {rank_get_action,man_get_action} from "../../../action/topaction"
import "../../../common/css/top/rank.css"
import Butique from "./boutique"
 class TopRank extends Component{
	 constructor(){
		 super();
		 this.state={
			 flaga:""
		 }
	 }
    render(){
		let {top} = this.props
		console.log(top)
        return (
		<div className="wrapper" ref="wrapper">
            <div className="content">
         
					<div className="top_title">
							<span className="iconfont">&#xe604;</span>
							<i>精品畅销</i>
							<b className="iconfont">&#xe620;</b>
					</div>
					<Butique top={top} 
					handleLeft={this.props.handleLeft}
					handleRight={this.props.handleRight}/>
			
			</div>
		</div>
        )
	}
	handleGet(flaga){
		this.setState({
			flaga:flaga
		})
	}
	componentDidMount(){
		this.props.getRankData()
		this.scroll = new BScroll(this.refs.wrapper,{
            click:true,
            pullUpLoad:true,
            probeType:2
        });
		console.log(this.scroll);
	
		// this.scroll.on("pullingUp",()=>{
		// 	if(this.state.flaga){
		// 		this.props.getRankData()
		// 	}else{
		// 		this.props.getWomananUpdate()
		// 	}
		// })
	}
	componentDidUpdate(){
		this.scroll.refresh()
	}
}
const mapStateToProps = (state)=>({
    top:state.topReducers.top
})

const mapDispatchToProps = (dispatch)=>({
	getRankData(){
		dispatch(man_get_action())
   },
   getWomananUpdate(){
	dispatch(rank_get_action())
   },
   handleLeft(flaga){
		if(flaga===false){
			dispatch(man_get_action())
			this.setState({
				flaga:true,
				flagb:false
			})
		}else{
			return
		}
	},
	handleRight(flagb){
		if(flagb===false){
			dispatch(rank_get_action())
			this.setState({
				flagb:true,
				flaga:false
			})
		}else{
			return
		}
		
		}
})
export default connect(mapStateToProps,mapDispatchToProps)(TopRank)