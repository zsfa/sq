import React,{Component} from "react"

export default class Header extends Component{
    constructor(){
        super();
        this.state={
             flaga:true,
             flagb:false
        }
       
    }
    render(){
        let {flaga,flagb} = this.state
        let {top} = this.props
        return (
          <div>
              <div className="top_class">
                <span className="conten_left" onClick={this.props.handleLeft.bind(this,flaga)}>男生</span>
                <span className="conten_right" onClick={this.props.handleRight.bind(this,flagb)}>女生</span>
             </div>
             <div className="top_main">
                {
                    top.map((item,index)=>{
                        return <div key={index} className="top_item">
                                        <div className="top_img">
                                            <img src={item.cover}/>
                                        </div>
                                        <div className="top_info">
                                            <h2>{item.title}</h2>
                                            <h3>{item.author}</h3>
                                            {index<3?<span className="ranking">{index+1}</span>:""}
                                            <p className="book_tag">
                                                <span>{Math.ceil((item.words)/10000)}万字</span>
                                                <span>{item.tags.split(",")[0]}</span>
                                                <span>{item.tags.split(",")[1]}</span>
                                            </p>
                                        </div>
                                </div>
                    })
                }
             </div>
          </div>
              
         
        )
    }
//   componentDidUpdate(){
//       this.props.emit("getFlag",this.state.flaga)
//   }
}