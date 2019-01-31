import React, { Component } from 'react';
import '@/assets/iconfont/iconfont.css'
import './index.scss'
import Address from '@/components/Address'
import axios from 'axios'
import ReactSwipe from 'react-swipe';
import Common from '@/components/Common/Header'
import {NavLink} from 'react-router-dom'
import Footer from '@/components/Common/Footer'
class Home extends Component {
   
    constructor(props) {
        super(props);
        this.state={
            datalist:[],
            mlist:[],
            count:[]
     }  
     
    }
    componentDidMount() {
        axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=201711271646319510').then(res=>{
            console.log(res.data)
            var list=[];
            list=res.data.ms.slice(0,8)
            console.log(list)
            this.setState({
                datalist:list,
                count:res.data.ms
            })
        })
        axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2017112716551398546').then(res=>{
            console.log(res.data.hotPoints)
            this.setState({
                mlist:res.data.hotPoints
            })
        })
    }
    render() {
        return (
        	<div id='head'>
            <Common></Common>
            <Address></Address>
            <div id='hot'>
            <h2>正在热映 ({this.state.count.length}部)<NavLink to='/Film/Hot'><b className='iconfont icon-more' ></b></NavLink></h2>
            <ul id='dul'>
            {
                this.state.datalist.map(item=>
                    <li key={item.id} onClick={this.handler.bind(this,item.id)}>
                    <i>{item.r}</i>
                    <img src={item.img}/>
                    <h3>{item.t}</h3>
                    </li>
                )
            }
            </ul>
            </div>
            <div id='soon'>
            <h2>即将上映 (60部) <NavLink to='/Film/Soon'><b className='iconfont icon-more'></b></NavLink></h2>
            </div>
            <div id='today'>
            <h2><NavLink to='/New'>今日热点</NavLink></h2>
            <ul id='mul'>
            {
                this.state.mlist.map(item=>
                    <li key={item.id} onClick={this.sender.bind(this,item.id)}>
                    <img src={item.img}/>
                    <div id='title'>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    </div>
                    </li>
                )
            }
            </ul>
            <Footer></Footer>
            </div>
            <div id='footer'>
            <a href='#'>PC版</a>
            <span>|</span>
            <a href='#'>客户端下载</a>
            <span>|</span>
            <a href='#'>意见反馈</a>
            <span>|</span>
            <a href='#'>帮助中心</a>
            
            </div>
        	</div>
        );
    }
    add(){
        coonsole.log(1)
    }
  handler(id){
    console.log(id)
    this.props.history.push(`/Movie/${id}`)
    console.log(this.props.history)
  }
  sender(id){
    this.props.history.push(`/New/${id}`);
  }
}

export default Home;
