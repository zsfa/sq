import React,{Component,Fragment} from 'react'
import ListContent from './children/listContent'
import {connect} from 'react-redux'
import {bookList_action} from '../../action/bookListAction/bookListActionCreator'
class BookList extends Component{
	render(){
		let {bookLists} = this.props;
		return(
			<Fragment>
				<ListContent lists={bookLists}/>
			</Fragment>
		)
	}
	componentDidMount(){
		this.props.getBookListData()
	}
}
const mapStateToProps = (state)=>({
	bookLists:state.bookList.bookLists
})
const mapDispatchToProps = (dispatch)=>({
	getBookListData(){
		dispatch(bookList_action())
	}
})

export default connect(mapStateToProps,mapDispatchToProps)(BookList)