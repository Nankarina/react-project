
const hot=(state=[],info)=>{
	let {type,payload}=info;//解构
	// console.log(info)
	switch (type) {
		case 'hotmovie':
			return [...payload]
		default:
			return state;
	}
}
const soon=(state=[],info)=>{
	let {type,payload}=info;//解构
	// console.log(info.payload)
	switch (type) {
		case 'soonmovie':
			return [...payload]
		default:
			return state;
	}
}
const come=(state=[],info)=>{
	let {type,payload}=info;//解构
	// console.log(info.payload)
	switch (type) {
		case 'comesoon':
			return [...payload]
		default:
			return state;
	}
}
const detail=(state=[],info)=>{
	let {type,payload}=info;//解构
	//console.log(info)
	switch (type) {
		case 'getDetail':
			return payload
		default:
			return state;
	}
}
const address=(state=[],info)=>{
	let {type,payload}=info;//解构
	//console.log(info)
	switch (type) {
		case 'getAddress':
			return payload
		default:
			return state;
	}
}
const keyword=(state=[],info)=>{
	let {type,payload}=info;//解构
	//console.log(info)
	switch (type) {
		case 'getKeyword':
			return payload
		default:
			return state;
	}
}
const movies=(state=[],info)=>{
	let {type,payload}=info;//解构
	//console.log(info)
	switch (type) {
		case 'getmovie':
			return payload
		default:
			return state;
	}
}
const getmovie=(state=[],info)=>{
	let {type,payload}=info;//解构
	//console.log(info)
	switch (type) {
		case 'getMovieDetail':
			return payload
		default:
			return state;
	}
}
const price=(state={count:1,price:45,total:45},info)=>{
	let {type,payload}=info;//解构
	console.log(info)
	switch (type) {
		case 'getprice':
			return payload
		default:
			return state;
	}
}
export {hot,soon,come,detail,address,keyword,movies,getmovie,price};//导出多个reducer
//export default reducer 导出单个reducer