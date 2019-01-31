import React, { Component } from 'react';
import './index.scss'
import '@/assets/iconfont/iconfont.css'
import {NavLink} from 'react-router-dom'

class Navside extends Component {
   

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div id='Nav'>
        	<NavLink to='/Home'><b className='iconfont icon-back'></b>
        	</NavLink>
            <i className='iconfont icon-share'></i>
            </div> 
        );
    }
}

export default Navside;
