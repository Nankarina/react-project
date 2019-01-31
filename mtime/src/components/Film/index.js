import React, { Component } from 'react';
import './index.scss'
var url=require('@/assets/loading.gif')
import axios from 'axios'
import Navside from '@/components/Common/Nav'
import Address from '@/components/Address'
class Film extends Component {
    
    constructor(props) {
        super(props);
       
    }
    
    render() {
        return (
        	<div id='Film'>
        	<Navside></Navside>
            <Address></Address>
            <setion id='navfilm'>
            {this.props.children}
            </setion>
        	</div>
        );
    }
}

export default Film