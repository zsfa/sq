import React,{Component,Fragment} from 'react'
import '../../../common/css/bookList/index.css'
class ListContent extends Component{
	render(){
		let {lists} = this.props;
		console.log(lists)	
		return(
			<Fragment>
				<div className="bookListWrapper">
					<ul>
						{
							lists.map((item,index)=>{
								return <li key={index}>
											<p>{item.title}</p>
											<p>{item.sdesc}</p>
									</li>
							})
						}
					</ul>
				</div>
			</Fragment>
		)
	}
}

export default ListContent