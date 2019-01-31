import React, { Component } from 'react';
import './index.scss'
import '@/assets/iconfont/iconfont.css'
import {NavLink} from 'react-router-dom'
class Nav extends Component {
   

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div id='Nav'>
        	<NavLink to='/Home'><b className='iconfont icon-more' ></b></NavLink>
        	<ul id='navside'>
        	<li>
        	<NavLink to='/Film/Hot' activeClassName='lon'>正在热映</NavLink>
        	</li>
        	<li>
        	<NavLink to='/Film/Soon' activeClassName='lon'>即将上映</NavLink>
        	</li>
        	</ul>
            </div> 
        );
    }
}

export default Nav;
