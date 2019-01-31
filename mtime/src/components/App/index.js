import React,{Component} from 'react';//引入react和组件
import '@/css/public.css'
import SwipeableViews from 'react-swipeable-views';
/*import Common from '@/components/Common'
import Address from '@/components/Address'*/
class App extends Component{
	constructor(props) {
        super(props);
    }
  
	render(){
		return(
			<div id='app'>
			<setion id='setion'>
			{this.props.children}
			</setion>
			</div>
			)
	}
}
export default App;