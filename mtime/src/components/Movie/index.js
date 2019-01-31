import React, { Component } from 'react';
import './index.scss'
var url=require('@/assets/loading.gif')
import axios from 'axios'
import Common from '@/components/Common/Header'
import Footer from '@/components/Common/Footer'
import { Pagination, Icon } from 'antd-mobile';
import 'antd-mobile/lib/pagination/style/css'; 
const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};
class Movie extends Component {
    
    constructor(props) {
        super(props);
        this.state={
        	datalist:null,
        	image:[],
        	comments:[],
        	comment:[],
            com:[],
            ca:[],
            page:1
        }
    }
    componentDidMount() {
        axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.mid}&locationId=290&t=2017112717534575522`).then(res=>{
        	
        	this.setState({
        		datalist:res.data,
        		image:res.data.images
        	})
        })
        axios.get('/Service/callback.mi/Movie/HotLongComments.api?movieId=227434&pageIndex=1&t=2017112719501186850').then(res=>{
        	
        	var sigle=res.data.comments.slice(0,1);
        	
        	this.setState({
        		comments:res.data.comments,
        		comment:sigle
        	})
        })
        
        axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.props.match.params.mid}&pageIndex=${this.state.page}&t=201711291426379058`).then(res=>{
            this.setState({
                com:res.data.cts,
                ca:res.data,
                
            })
            
        })
       
        

    }
    render() {
        return (
        	<div id='movie'>
        	<Common></Common>
        	{
        		this.state.datalist?<div id='m'>
        		<div id='mf'>
        		<img id='simg' src={this.state.datalist.image}/>
        		<div id='mtitle'>
                <div id='spanfloat'>
        		<h2>{this.state.datalist.titleCn}</h2>
                <em>{this.state.datalist.rating}</em>
                </div>
        		<p>{this.state.datalist.titleEn}</p>
        		<span>{this.state.datalist.runTime}</span>
        		
        		<span>{this.state.datalist.release.date} {this.state.datalist.release.location}上映</span>
        		<b>我想看</b>
        		<i>我要评分</i>
        		</div>
        		</div>
        		<h3>{this.state.datalist.commonSpecial}</h3>
        		<div id='buy' onClick={this.put.bind(this,this.props.match.params.mid)}>查影讯/购票</div>
        		<div id='desc'>{this.state.datalist.content}</div>
        		<div id='photo'>
        		<h2>{this.state.datalist.imageCount}张图片 <b className='iconfont icon-more'></b></h2>
        		<ul id='mphoto'>
        		{
        			this.state.image.map((item,index)=>
        				<li key={index}><img src={item}/></li>
        				)
        		}
        		</ul>
        		<div id='mcomments'>
        		<h2>精彩影评({this.state.comments.length})<b className='iconfont icon-more'></b></h2>
        		<div id='sender'>
        		{
        			this.state.comment.map(item=>
        				<div key={item.id}>
        				<h2>{item.title}</h2>
        				<p>{item.content}...</p>
        				<div id='person'>
        				<img src={item.headurl}/>
        				<span>{item.nickname}</span>
        				<em>评分:<i>{item.rating}</i></em>
        				</div>
        				</div>
        			)
        		}
                </div>
                </div>
                <img id='bid' src="//static1.mtime.cn/feature/mobile/banner/2017/1102/gpsl11750210.jpg"/>
                <div id='ulcomment'>
                <h2>网友短评({this.state.ca.totalCommentCount})</h2>
                <ul className='ulcomment'>
                {
                    this.state.com.map(item=>
                        <li key={item.tweetId}>
                        <img src={item.caimg}/>
                        <div className='cfloat'>
                        <h2 id='h'><span>{item.ca}</span><em>{item.cr}</em></h2>
                        <p>{item.ce}</p>
                        </div>
                        </li>
                        )
                }
                </ul>
                <div className="pagination-container">
                   <Pagination total={this.state.ca.tpc}
                      className="custom-pagination-with-icon"
                      current={this.state.page}
                      locale={{
                        prevText: (<span className="arrow-align" onClick={this.pre.bind(this)}><Icon type="left" />上一页</span>),
                        nextText: (<span className="arrow-align"  onClick={this.add.bind(this)}><Icon type="right" />下一页</span>),
                      }}
                    />

                    
                  </div>
                  <Footer></Footer>
                </div>
                </div>
                
                </div>:
        		<img id='loading' src={url}/>
        	}

        	</div>
        );
    }
    add(){
   
        var count=this.state.page+1;
        if(count>10){
            count=10
        }
        axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.props.match.params.mid}&pageIndex=${count}&t=201711291426379058`).then(res=>{
           this.setState({
            com:res.data.cts,
            page:count
           })
        })
    }
    pre(){
        var num=this.state.page-1;
        if(num<1){
            num=1
        }
        axios.get(`/Service/callback.mi/Showtime/MovieComments.api?movieId=${this.props.match.params.mid}&pageIndex=${num}&t=201711291426379058`).then(res=>{
           this.setState({
            com:res.data.cts,
            page:num
           })
        })
    }
    put(id){
        console.log(id)
        this.props.history.push(`/Cart/${id}`)
    }
}

export default Movie