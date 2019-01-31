import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import './index.scss'
import Footer from '@/components/Common/Footer'
  


class Hot extends Component {
   
 constructor(props) {
        super(props);
    }
componentDidMount() {

    if(this.props.datalist.length==0){
    	this.props.hotmovie();

    }
  
}
    render() {
        return (
        	<div id='mhot'>
            <ul id='hmovie'>
        	{
        		this.props.datalist.map(item=>
        			<li key={item.id} onClick={this.send.bind(this,item.id)}>
        			<div id='top'>
        			<img src={item.img}/>
        			<div id='movietitle'>
        			<h3><span>{item.t}</span> <b>{item.r}</b></h3>
        			<h4>{item.commonSpecial}</h4>
        			<p id='te'><span>导演:</span>{item.dN}</p>
        			<p>{item.NearestCinemaCount}场影院上映{item.NearestShowtimeCount}场</p>
        			</div>
        			</div>
        			<h2>购票</h2>
        			</li>
        			)
        	}
        	</ul>
           
            <Footer></Footer>
           </div>  
        );

    }
    send(id){
    	this.props.history.push(`/Movie/${id}`);
    }
    add(){

    }
}

export default connect(
	(state)=>{
		console.log(state.data)
		return{
			datalist:state.data
		}
	},
	
	{
		hotmovie:()=>{
			return (dispatch)=>{
				axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20171128916457172').then(res=>{
					console.log(res.data.ms)
					dispatch({
						type:'hotmovie',
						payload:res.data.ms
					})
				})
			}
		}
	}
	)(Hot);
