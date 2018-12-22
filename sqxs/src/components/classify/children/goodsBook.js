import React,{Component,Fragment} from 'react'
import '../../../common/css/classify/index.css'
import {Link} from 'react-router-dom'
class GoodsBook extends Component{
	render(){
		let {gbList,girlList,handleMore,handleMoreTwo,newBooks} = this.props
		// console.log(newBooks)
		
		return (
			<Fragment>
				<div className="downLoad">
				<a href="http://t.shuqi.com/?#!/ac/in/ct/download">
					<img id="downLoad" src="http://img-tailor.11222.cn/pm/book/operate/2018020715462184.jpg"/	>
					</a>
				</div>
				<h4 className="tit">精品推荐</h4>
				<div className="fa-goodLists">
					<ul className="goodLists">
						{
							gbList.map((item,index)=>{
								return<li key={index}><Link to={"/details/"+item.bid}>
											<img src={item.book_cover}/>
											<span>{item.bookname}</span>
											<i>{item.author_name}</i>							
										</Link></li>
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
				<h4 className="tit">新书专区</h4>
				<div className="newBooks">
					<ul>
						{
							newBooks.map((item,index)=>{
								if(index<1){
									return <li key={index} className="newPic">
												<i>{index+1}</i>
												<img src={item.book_cover}/>
												<div>
													<p>{item.bookname}</p>
													<p>{item.author_name}</p>
													<p>{item.book_info}</p>
													<span className={item.stat_name=="连载"?"blue":"green"}>{item.stat_name}</span>
													<span>{Math.ceil(item.size/10000)}万字</span>
													<span>{item.tag[0]}</span>
													<span>{item.tag[1]}</span>
												</div>
											</li>
								}
								else{
									return <li key={index} className="newLists">
												<span>{index+1}</span>
												<span>{item.bookname}</span>
												<span>{item.stat_name}</span>
												<span>{item.class_name}</span>
											</li>
								}
							})
						}
					</ul>
				</div>
				<Link to="/BookList"><div className="goodLists-change"><span>查看更多</span></div></Link>
			</Fragment>
		)
	}
}


export default GoodsBook