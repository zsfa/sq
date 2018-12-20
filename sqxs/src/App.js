import React, {Component} from 'react';
import {HashRouter as Router,Route,NavLink,Link,Switch,Redirect} from 'react-router-dom'
import Classify from './components/classify/classify'
import BookTop from './components/bookTop/bookTop'
import BookList from './components/bookList/bookList'
import User from './components/user/user'
import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
			<Provider store={store}>
				<Router>
					<div>
							<Switch>
								<Route path="/classify" component={Classify}/>
								<Route path="/bookTop" component={BookTop}/>
								<Route path="/bookList" component={BookList}/>
								<Route path="/user" component={User}/>
								<Redirect path="/" to="/classify"/>
							</Switch>
							<div id="footer">
								<ul>
									<li><NavLink to="/classify"><i></i><span>分类</span></NavLink></li>
									<li><NavLink to="/bookTop"><i></i><span>排行</span></NavLink></li>
									<li><NavLink to="/bookList"><i></i><span>书单</span></NavLink></li>
									<li><NavLink to="/user"><i></i><span>我的</span></NavLink></li>
								</ul>
							</div>
					</div>
				</Router>
			</Provider>
    )
  }
}

export default App;
