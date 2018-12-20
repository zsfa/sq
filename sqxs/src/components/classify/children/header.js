import React,{Component} from "react"
import '../../../common/css/classify/header.css'
export default class Header extends Component{
    render(){
        return (
          <header>
              <h1 className="logo">
                  <span className="logo_img">
                        <img src="http://c-shuqi.11222.cn/assets/logo_7a44de2.png"/>
                  </span>
                  <span className="logo_name">
                        <img src="http://c-shuqi.11222.cn/assets/website-name_c08f935.png" />
                  </span>
              </h1>
                      <a href="#" id="classify_search">
                        <img src="http://c-shuqi.11222.cn/assets/search_d5e5264.png" />
                      </a>
          </header>
        )
    }
}