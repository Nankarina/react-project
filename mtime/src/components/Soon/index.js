import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './index.scss'
import Footer from '@/components/Common/Footer'
class Soon extends Component {
   constructor(props) {
        super(props);
    }
    componentDidMount() {
        if(this.props.movielist.length==0){
            this.props.soonmovie()
            
        }
        if(this.props.datalist.length==0){
            this.props.comesoon()
        }
    }
    render() {
        return (
        	<div id='soon'>
        	<div id='action'>
            <h2>最受关注<span>(10部)</span></h2>
            {
                this.props.movielist.map(item=>
                   <div id='smovie' key={item.id} onClick={this.add.bind(this,item.id)}>
                   <i>{item.rMonth}月{item.rDay}天</i>
                   <div id='mdesc'>
                   <img src={item.image}/>
                   <div id='dectitle'>
                    <h2>{item.title}</h2>
                    <p><span>{item.wantedCount}</span>人想看-{item.type}</p>
                   <p>导演: {item.director}</p>
                   <p>演员: {item.actor1},{item.actor2} </p>
                   <p><em>超前预售</em><b>预告片</b></p>
                   </div>
                  
                   
                   </div>
                   </div>

                    )
            
            }
           
            </div>
            <img id='img' src='//static1.mtime.cn/feature/mobile/banner/2017/1102/gpsl11750210.jpg'/>
            <div id='comesoon'>
            <h2>即将上映<span>({this.props.datalist.length}部)</span></h2>
            <ul id='comingsoon'>
            {
                this.props.datalist.map(item=>
                    <li key={item.id} onClick={this.send.bind(this,item.id)}>
                    <div id='float'>
                   <img src={item.image}/>
                    <div id='soontitle'>
                    <div id='h'><h3>{item.title}</h3><div id='b'>{item.rMonth}月{item.rDay}日上映</div></div>
                    <p><span>{item.wantedCount}</span>人想看-{item.type}</p>
                    <p>导演: {item.director}</p>
                    <p><i>超前预售</i><b>预告片</b></p>
                    </div>
                    </div>
                    </li>
                )
            }
            </ul>
            </div>
            <Footer></Footer>
        	</div>  
        );
    }
    send(id){
        this.props.history.push(`/Movie/${id}`);
    }
    add(id){
        this.props.history.push(`/Movie/${id}`)
    }
}

export default connect(
    (state)=>{
        return{
            movielist:state.movie,
            datalist:state.list
        }
    },
    {
    soonmovie:()=>{
        return(dispatch)=>{
            axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2017112810433813003').then(res=>{
                console.log(res.data.attention)
                 var list=res.data.attention.slice(0,1)
                dispatch({
                    type:'soonmovie',
                    payload:list
                })
            })
        }
     },
     comesoon:()=>{
         return(dispatch)=>{
             axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2017112810433813003').then(res=>{
                 dispatch({
                     type:'comesoon',
                     payload:res.data.moviecomings

                 })
             })
         }
     }
    },
    

    )(Soon);

