import React, { Component } from 'react'
import './index.scss'
import {NavLink} from 'react-router-dom'
class Footer extends Component {
   

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div id='foot'>
        	<ul id='bottom'>
            <li>
            <NavLink to='/Head'>
                首页
            </NavLink>
            </li>
            <li>
            <NavLink to='/Search'>
                搜索
            </NavLink>
            </li>
            <li>
            <NavLink to='/Film/Hot'>
                上映
            </NavLink>
            </li>
            <li>
            <NavLink to='/Film/Soon'>
                未映
            </NavLink>
            </li>
            <li>
            <a href='#'>我的</a>
            </li>
            </ul>
        	</div>  
        );
    }
}

export default Footer;
