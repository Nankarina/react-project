import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import Navside from '@/components/Common/Navside'
import {NavLink} from 'react-redux'
import './index.scss'
import Footer from '@/components/Common/Footer'
class New extends Component {
   constructor(props) {
        super(props);
    }
    componentWillMount(){
       this.props.getDetail(this.props.match.params.id);
    }
    //监听路由是否变化，路由改变，改变store中的状态
    componentWillReceiveProps(nextProps){
      if (nextProps.location.pathname != this.props.location.pathname) {
             this.props.getDetail(this.props.match.params.id);
          } 
          
    }
    render() {
        
        return (
        	<div id='New'>
        	<Navside></Navside>
            
            <div id='newdetail' key={this.props.dlist}>
            <h2>{this.props.dlist.title}</h2>
            <p><span>{this.props.dlist.time}</span><i>评论{this.props.dlist.commentCount}</i><b>相关电影/影人</b></p>
            <div id='html' dangerouslySetInnerHTML={{__html:this.props.dlist.content}}/>
            
            </div>
            <div id='author'>
            (作者:{this.props.dlist.author} 编辑:{this.props.dlist.editor})
            </div>
            <Footer></Footer>
        	</div>  
        );
    }
   
}

export default connect(
    (state)=>{
        
        return{
            dlist:state.detaillist
        }
    },
    {
        getDetail:(id)=>{
            return(dispatch)=>{
                axios.get(`/Service/callback.mi/News/Detail.api?newsId=${id}&t=201711281546215241`).then(res=>{
                    /*console.log(res.data)*/
                    dispatch({
                        type:'getDetail',
                        payload:res.data
                    })
                })
            }
        }
    }
    )(New)