import React,{Component,Fragment} from 'react'
import {connect} from "react-redux"
import {top_get_action} from "../../action/topaction"
import Girl from "./children/girl"
import "../../common/css/top/top.css"
class BookTop extends Component{
	constructor(){
		super();
	}
	render(){
		let {dataSrc}=this.props
		console.log(dataSrc)
		return(
			<Fragment>
				<Girl message={dataSrc} />
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getTopData()
	}
}
const mapStateToProps = (state)=>({
    dataSrc:state.topReducers.dataSrc
})

const mapDispatchToProps = (dispatch)=>({
   getTopData(){
   	dispatch(top_get_action())
   }
})
export default connect(mapStateToProps,mapDispatchToProps)(BookTop)