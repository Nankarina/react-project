import React, { Component } from 'react';

import '@/assets/iconfont/iconfont.css'
import './index.scss'
import {NavLink} from 'react-router-dom'
class Address extends Component {
   

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div id='address'>
        	<div id='left'>
            <span>北京</span>
            <i className='iconfont icon-moreunfold'></i>
            </div>
            <div id='middle'>
            <i className='iconfont icon-search'></i>
            <NavLink to='/Search'><input type='text' placeholder='影片/影院/影人,任你搜'/></NavLink>

            </div>
            <div className='right'></div>
        	</div>  
        );
    }
}

export default Address;
