// import '../Style/Home.css'
import React, { useEffect } from 'react'
import Action from './Redux/Action'
import { useDispatch, useSelector } from 'react-redux'

const Home = ({ handleitem }) => {

  const { product } = useSelector(state => state.items)
  console.log(product)
  const dispatch = useDispatch()
  console.log(product)

  useEffect(() => {
    dispatch(Action())
  }, [dispatch])

  return (
    <div>
      <div className='fanimate'>

  <h1 >🛍️ "Best Deals, Best Quality – <br></br>Sab kuch ek hi jagah!"</h1>
  <h1>Where Style Meets Convenience</h1>
  <div className='animate' >
  <a href='#1'>  <button className='fbtn'>Shop Now</button></a></div>
 </div>


        <h1 className='head'>Explore Cards </h1>
      <div id='1' className='container'>
        {
          product?.map((items, index) => (

            <div className='box' key={items.id || index}>
              <h1>{items.id}</h1>
              <div>
                {console.log(items.img)}
                <img className='image' src={`https://eshopping-1.onrender.com/upload/${items.img}`} alt="" />
                {console.log(`https://eshopping-1.onrender.com/${items.img}`)}
              </div>
              <h4>{items.name}</h4>
              <p>{items.desc}</p>
              <h5>{items.category}</h5>
              <p>{items.rating}</p>
              <button onClick={() => handleitem(items)}>Add to cart</button>
            </div>

          ))
        }

      </div>
    </div>
  )

}



export default Home