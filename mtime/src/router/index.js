import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import App from '@/components/App'
import Home from '@/components/Home'

import Search from '@/components/Search'
import Movie from '@/components/Movie'
import Hot from '@/components/Hot'
import Soon from '@/components/Soon'
import Film from '@/components/Film'
import New from '@/components/News'
import List from '@/components/List'
import Cart from '@/components/Cart'
import {Provider}  from "react-redux";
import store  from "../Redux/Store";
const router=(
	<Provider store={store}>
	<Router>
	<App>
	<Switch>
	<Route path="/Home" component={Home}></Route>
	<Route path='/Film' render={()=>
		<Film>
		<Switch>
		<Route path='/Film/Hot' component={Hot}/>
		<Route path='/Film/Soon' component={Soon}/>
		<Redirect from='/' to='/Film/Hot'/>
		</Switch>
		</Film>
	}></Route>
	
	<Route path='/Search' component={Search}/>
	<Route path='/New/:id' component={New}/>
	<Route path='/List/:name' component={List}/>
	<Route path='/Search' component={Search}/>
	<Route path='/Movie/:mid' component={Movie}/>
	<Route path='/Cart/:cid' component={Cart}/>
	<Redirect from='*' to='/Home'/>
	</Switch>
	</App>
	</Router>
	</Provider>
)
export default router;