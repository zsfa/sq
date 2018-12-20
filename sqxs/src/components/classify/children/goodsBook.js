import React,{Component,Fragment} from 'react'
import '../../../common/css/classify/index.css'
class GoodsBook extends Component{
	render(){
		let {gbList,girlList,handleMore,handleMoreTwo} = this.props
		return (
			<Fragment>
				<h4 className="tit">精品推荐</h4>
				<div className="fa-goodLists">
					<ul className="goodLists">
						{
							gbList.map((item,index)=>{
								return<li key={index} >
											<img src={item.book_cover}/>
											<span>{item.bookname}</span>
											<i>{item.author_name}</i>							
									</li>
							})
						}
					</ul>
				</div>
				<div className="goodLists-change"><span>换一换</span><i className="iconfont" onClick={handleMore}>&#xe601;</i></div>
				<h4 className="tit">女生美文</h4>
				<div className="fa-goodLists">
					<ul className="goodLists">
						{
							girlList.length>0?girlList.map((item,index)=>{
								if(index<4){
									return <li key={index}>
											<img src={item.book_cover}/>
											<span>{item.bookname}</span>
											<i>{item.author_name}</i>	
									</li>
								}
							}):""
						}
					</ul>
				</div>
				<div className="girlLists">
					<ul>
						{
							girlList.length>0?girlList.map((item,index)=>{
								if(index>3){
									return <li key={index}>
											<span>{item.bookname}</span>
											<i className={item.stat_name=="完结"?"green":"blue"}>{item.stat_name}</i>
											<b>{item.class_name}</b>
											<em>{item.introduction}</em>
									</li>
								}
							}):""
						}
					</ul>
				</div>
				<div className="goodLists-change"><span>换一换</span><i className="iconfont" onClick={handleMoreTwo}>&#xe601;</i></div>
			</Fragment>
		)
	}
}


export default GoodsBook