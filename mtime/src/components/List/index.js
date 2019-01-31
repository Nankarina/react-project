import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './index.scss'
import {NavLink} from 'react-router-dom'
import Footer from '@/components/Common/Footer'
import { Tabs, WhiteSpace } from 'antd-mobile';
import 'antd-mobile/lib/tabs/style/css'; 
import ReactSwipe from 'react-swipe';
import '@/assets/iconfont/iconfont.css'

const tabs = [
  { title: '影片' },
  { title: '影院' },
  { title: '影人' },
];
class List extends Component {
   constructor(props) {
        super(props);
    }
    componentWillMount(nextProps) {
      
      this.props.getmovie(this.props.match.params.name)
    
    }
    componentWillReceiveProps(nextProps){
      
      if (nextProps.location.pathname != this.props.location.pathname) {

            this.props.getmovie(this.props.match.params.name)
          } 
        
    }
    
  
    render() {

        return (
        	<div id='List'>
        	<div id='lhead'>
            <NavLink to='/Search'><b className='iconfont icon-back te'></b></NavLink>
            <div id='linput'>
            <b className='iconfont icon-search'></b>
            <input type='text' value={this.props.match.params.name}/>
            </div>
            <div id='lright'>搜索</div>
        	</div>  
            <div>
                <WhiteSpace />
                    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
                      <div id='cmovie'>
                        <ReactSwipe className="carousel" swipeOptions={{continuous: false,auto: 2000}}>
                             <img src='//static1.mtime.cn/feature/mobile/banner/2017/1107/yx750175.jpg' key={1}/>
                             <img src='//static1.mtime.cn/feature/mobile/banner/2017/1102/zylm750175.jpg' key={2}/>
                         </ReactSwipe>
                        
                         {this.props.movielist.movies? <ul className='cmovie'key={this.props.movielist.movies.length}>
                         {
                          this.props.movielist.movies.map(item=>
                            <li key={item.id} onClick={this.add.bind(this,item.id)} >
                            <img src={item.img}/>
                            <div id='title1'>
                            <h2>{item.name}({item.rYear})</h2>
                            <p>{item.nameEn}</p>
                            <span>{item.movieType}</span>
                           <span>{item.rLocation}</span>
                            </div>
                            </li>
                            )
                         }
                         
                         </ul>:null}
                          
                         <Footer></Footer>
                      </div>
                      <div id='cinema'>
                        <ReactSwipe className="carousel" swipeOptions={{continuous: false,auto: 2000}}>
                             <img src='//static1.mtime.cn/feature/mobile/banner/2017/1107/yx750175.jpg' key={1}/>
                             <img src='//static1.mtime.cn/feature/mobile/banner/2017/1102/zylm750175.jpg' key={2}/>
                         </ReactSwipe>
                        {this.props.movielist.cinemas?<ul className='cinema'key={this.props.movielist.cinemas.length}>
                          {
                            this.props.movielist.cinemas.map(item=>
                              <li key={item.id}>
                              <h2>{item.name}</h2>
                              <div id='like'><i className='iconfont icon-favorites'></i><span>{item.loveDeep}%</span></div>
                              <p>{item.address}</p>
                              </li>
                              )
                          }
                          </ul>:null}
                          <Footer></Footer>
                      </div>
                      <div id='cperson'>
                        <ReactSwipe className="carousel" swipeOptions={{continuous: false,auto: 2000}}>
                             <img src='//static1.mtime.cn/feature/mobile/banner/2017/1107/yx750175.jpg' key={1}/>
                             <img src='//static1.mtime.cn/feature/mobile/banner/2017/1102/zylm750175.jpg' key={2}/>
                         </ReactSwipe>
                        
                        {
                           this.props.movielist.persons?<ul className='cperson' key={this.props.movielist.persons.length}>
                           {
                            this.props.movielist.persons.map(item=>
                              <li key={item.id}>
                               <img src={item.img}/>
                               <div id='title2'>
                               <h2>{item.name}</h2>
                               <p>{item.nameEn}</p>
                               <span>{item.profession}</span>
                              <span>{item.rLocation}</span>
                              </div>
                              </li>

                            )
                            
                           }
                           </ul>:null
                           
                          }
                          <Footer></Footer>
                      </div>
                    </Tabs>
                    <WhiteSpace />
                    </div>
            </div>
        );
    }
   add(id){
    this.props.history.push(`/Movie/${id}`)
   }
   handler(id){
    this.props.history.push(`/Movie/${id}`)
   }
}

export default connect(
    (state)=>{
      return{
        movielist:state.movielist,
        cinemalist:state.cinemalist
      }
    },
    {
      getmovie:(name)=>{
        return(dispatch)=>{
          axios.get(`/Service/callback.mi/Showtime/SearchVoice.api?keyword=${name}&pageIndex=1&searchType=3&locationId=290&t=2017112821381576380`).then(res=>{
            console.log(res.data);
            dispatch({
              type:'getmovie',
              payload:res.data
            })
          })
        }
      },
     
    }
    )(List);

