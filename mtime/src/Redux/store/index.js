import {createStore,combineReducers} from 'redux';//combineReducers，将多个导出的reducer合并到一个combineReducer中
import {hot,soon,come,detail,address,keyword,movies,getmovie,price} from '../Reducer';//导入reducer模板
import thunk from 'redux-thunk';//引入中间件
import {applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;//配置redux-devtools
 const enhancer = composeEnhancers(
  applyMiddleware(thunk, promiseMiddleware)
  // other store enhancers if any
); 
const store =createStore(combineReducers({
	data:hot,
	movie:soon,
	list:come,
  detaillist:detail,
  addresslist:address,
  keylist:keyword,
  movielist:movies,
  mlist:getmovie,
  price:price
}),enhancer);//加入中间件
export default store;
