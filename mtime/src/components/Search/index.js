import React, { Component } from 'react';
import '@/assets/iconfont/iconfont.css'
import './index.scss'
import {connect} from 'react-redux'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Footer from '@/components/Common/Footer'
class Search extends Component {
   

    constructor(props) {
        super(props);
    }
    componentWillMount(){
        if(this.props.keylist.length==0){
            this.props.keyword();
        }
        
       
    }
    render() {
        return (
        	<div id='search'>
            <div id='shead'>
            <NavLink to='/Home'><b className='iconfont icon-back te'></b></NavLink>
            <div id='sinput'>
            <b className='iconfont icon-search'></b>
            <input id='text' type='text' placeholder='影片/影院/影人,任你搜'/>

            </div>
            <div id='sright' onClick={this.send.bind(this)}><NavLink to='/List'>搜索</NavLink></div>
            </div>
        	<img src='//static4da.mtime.cn/feature/mobile/banner/2017/1116/jrwz750175.jpg'/>
            <h2>热门搜索</h2>
            <ul id='listul' key={this.props.keylist.length}>
                {
               this.props.keylist.map((item,index)=>
                <li key={index} onClick={this.show.bind(this,item)}>{item}</li>
                )

             }
             </ul>
             <Footer></Footer>
        	</div>  
        );
    }
    send(){
        var input=document.getElementById('text');
        var value=input.value;
        this.props.history.push(`/List/${value}`)
    }
    show(item){
        this.props.history.push(`/List/${item}`)
    }
}

export default connect(
    (state)=>{
        return{
            keylist:state.keylist
        }
    },
    {
        keyword:()=>{
            return(dispatch)=>{
                axios.get('/Service/callback.mi/Search/HotKeyWords.api?t=2017112820244765049').then(res=>{
                    console.log(res.data)
                    dispatch({
                        type:'getKeyword',
                        payload:res.data.keywords
                    })
                })
               
            }
        }
    }
    )(Search);
