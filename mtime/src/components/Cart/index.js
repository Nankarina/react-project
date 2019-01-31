import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './index.scss'
import '@/assets/iconfont/iconfont.css'
import Footer from '@/components/Common/Footer'
class Cart extends Component {
   constructor(props) {
        super(props);
        this.state={
            count:1,
            price:45,
            total:45
          
        }
    }
    componentDidMount() {
      this.props.getMovieDetail(this.props.match.params.cid)
    // this.props.getprice()
        
     }
     componentWillReceiveProps(nextProps){
       
       if (nextProps.location.pathname != this.props.location.pathname) {
           this.props.getMovieDetail(this.props.match.params.cid)
           
           } 
         
     }
    render() {
        return (
        	<div id='cart'>
        	<div id='carthead'>
            <b className='iconfont icon-back' onClick={this.back.bind(this)}></b>
            <span>{this.props.movielist.titleCn}</span>
            </div>
            <div id='cartlist'>
            <img src={this.props.movielist.image}/>
            <div id='cartmenu'>
            <h2><span>{this.props.movielist.titleCn}</span><b>{this.props.movielist.rating}</b></h2>
            <p id='pe'>{this.props.movielist.titleEn}</p>
            <p><span>导演: {this.props.movielist.directors}</span></p>
            <p>时长: {this.props.movielist.runTime}</p>
            {
                this.props.movielist.release?<p>{this.props.movielist.release.date} {this.props.movielist.release.location}上映</p>:null
            }
            
            <div>
                <p>票价:<em>{this.state.price}元</em></p>
                <div id='cartbuy'>
                <span>购买票数:</span>
                <b onClick={this.pre.bind(this)}>-</b><input type='text' value={this.state.count} id='inputid'/><b onClick={this.add.bind(this)}>+</b>
                </div>
                <h3>总价: <i id='total'>{this.state.total}</i>元</h3>
            </div>
            <h4>结算</h4>
            </div>
            </div>
            </div>  

        );
    }
   back(){
    history.go(-1)
   }
   add(){
    var input=document.getElementById('inputid');
    var num=parseInt(input.value)+1
    var total=45*num
    if(num>=99){
        num=99
    }
    this.setState({
        count:num,
        total:total
    })
   }
   pre(){
    var num=this.state.count-1;
    var total=45*num;
    if(num<=1){
        num=1
    }
    this.setState({
        count:num,
        total:total
    })
   }
  
}

export default connect(
    (state)=>{
        return{
            movielist:state.mlist,
            price:state.price
        }
    },
    {
        getMovieDetail:(cid)=>{
            console.log(cid)
            return(dispatch)=>{
                axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${cid}&locationId=290&t=2017112917305326802`).then(res=>{
                    dispatch({
                        type:'getMovieDetail',
                        payload:res.data
                    })
                })
                
            }
        },
        getprice:(num,total)=>{
            
            return(dispatch)=>{
                dispatch({
                    type:'getprice',
                    payload:{
                        count:num,
                        price:45,
                        total:total
                        
                    }
                })
            }
        }
    }
    )(Cart);

