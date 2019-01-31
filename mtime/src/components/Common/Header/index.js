import React, { Component } from 'react';
import './index.scss'
import {NavLink} from 'react-router-dom';
import '@/assets/iconfont/iconfont.css'
var img=require('@/assets/logo_mtime.png') 
class Common extends Component {
   

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div id='header'>
            <a href="#" id='logo'><img src={img}/></a>
            <ul id='ul'>
            <li>
            <NavLink to='/Home' activeClassName='scolor'>首页</NavLink>
            </li>
            <li>
            <NavLink to='/Search' activeClassName='scolor'>搜索</NavLink>
            </li>
             <li>
            <NavLink to='/Film/Hot' activeClassName='scolor'>上映</NavLink>
            <i>NEW</i>
            </li>
            <li>
            <NavLink to='/Film/Soon' activeClassName='scolor'>未映</NavLink>
            </li>
            </ul>
            <b className='iconfont icon-account'></b>
            </div> 
        );
    }
}

export default Common;
