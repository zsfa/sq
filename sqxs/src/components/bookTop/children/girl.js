import React,{Component,Fragment} from 'react'

export default class Girl extends Component{
	render(){
		
		let {message} = this.props
		console.log(message.module,1)
		//message= message.data
		return(
			<div className="top_rank">
				<div id="top_header">
					<h1 className="logo">
							<span className="logo_img">
										<img src="http://c-shuqi.11222.cn/assets/logo_7a44de2.png"/>
							</span>
							<span className="logo_name">
										<img src="http://c-shuqi.11222.cn/assets/website-name_c08f935.png" />
							</span>
					</h1>
					<h2>排行</h2>
					<a href="#" id="classify_search">
						<img src="http://c-shuqi.11222.cn/assets/search_d5e5264.png" />
					</a>
				</div>
			
				<ul className="top_message">
					{
						message.module.map((item,index)=>{
							 return  item.content.title?<a href="#" key={index} className="message_wrap"> 
										 <li  className="rank_item">
											 <h2>{item.content.title}</h2>
											 <p>{item.content.desc}</p>
										 </li>
									 </a>:""
						 })
						 
					}
				</ul>
				
			</div>
		)
	}

}

