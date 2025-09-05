const product=[]
const Reducers=(state={product},Action)=>{
    switch(Action.type){
        case 'success':
            return{product:Action.payload}
        case 'fail':
            return   {product:Action.payload}
        default:
            return state
    }
}
export default Reducers