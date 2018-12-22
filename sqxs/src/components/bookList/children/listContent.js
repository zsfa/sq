import React,{Component,Fragment} from 'react'

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
											<div className="box">
												<div className="listBox">
													<h4>{item.title}</h4>
													<span>{item.sdesc}</span>
													 <p><span>{item.tags.split(",")[0]}</span>
														<span>{item.tags.split(",")[1]}</span>
														<span>{item.tags.split(",")[2]}</span>
														<span>{item.tags.split(",")[3]}</span></p>
												</div>
												<div className="picBox">
													<img src={item.items[0].cover}/>
													<img src={item.items[1].cover}/>
													<img src={item.items[2].cover}/>
												</div>
											</div>
									</li>
							})
						}
					</ul>
					<div className="loading"><i className="fa fa-spinner fa-pulse"></i><span>正在加载中...</span></div>
				</div>
			</Fragment>
		)
	}
}

export default ListContent