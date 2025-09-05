import axios from 'axios'

const Action = () =>async(dispatch)=>{

    try {

        const product = await axios.get('http://localhost:9800/get')
        const res = product.data
console.log(res)
        dispatch({type:'success',payload:res})

    } catch (error) {

        dispatch({type:'fail',payload:error.message})

    }

}



export default Action