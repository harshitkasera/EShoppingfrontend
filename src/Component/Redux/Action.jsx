import axios from 'axios'

const Action = () =>async(dispatch)=>{

    try {

        const product = await axios.get('https://eshopping-1.onrender.com/get')
        const res = product.data
console.log(res)
        dispatch({type:'success',payload:res})

    } catch (error) {

        dispatch({type:'fail',payload:error.message})

    }

}



export default Action