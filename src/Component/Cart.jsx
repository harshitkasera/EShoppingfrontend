import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const Cart = ({ cart, setcart }) => {
    console.log(Cart)
    const [price, setprice] = useState(0)
    const navigate = useNavigate()

    const handlePrice = () => {
        let ans = 0
        cart?.forEach((element) => {
            ans += element.qty * element.price
        });
        setprice(ans)
    }
    useEffect(() => {
        handlePrice()
    })
    const handleRemove = (item) => {
        let arr = cart.filter(element => item._id !== element._id)
        setcart(arr)
    }
    const handleChange = (item, d) => {
        let int = 0
        cart.forEach((element, index) => {
            if (item._id === element._id) {
                int = index
            }
        })
            const temp = cart
            temp[ind].qty += d
            if (temp[ind].qty === 0) {
                temp[ind].qty = 1
                return
            }
            setcart([...temp])
    }
    const token = (token) => {
        console.log(token)
    }
    
    return (
        <div>
            {
                cart?.map((item, ind) => (
                    <div className='cart-div' key={ind}>
                        <div className='cart-img'>
                            <img src={`http://localhost:9800/upload/${item.img}`}/>
                        </div>
                        <div className='cart-item'>
                            <span>{item.name}</span>
                            <span>{item.category}</span>
                        </div>
                        <div className='cart-btn'>
                            <button className='btn btn-danger' onClick={() => handleChange(item, -1)}>-</button>
                            <button className='btn btn-primary'>{item.qty}</button>
                            <button className='btn btn-success' onClick={() => handleChange(item, +1)}>+</button>
                        </div>
                        <div className='cart-price'>
                            <span>Rs.{item.qty*item.price}</span>
                            <button className='btn btn-danger' onClick={() => handleRemove(item)}>Remove</button>
                        </div>
                    </div>
                ))
            }

            <div>
             <p style={{ color: 'green', fontSize: '16px' }}>Total Price of Your Cart is : <span>{price}</span></p>
                <StripeCheckout
                token = {token}
                stripeKey = 'pk_test_51NqsGdSEnDx41uiAy91YixIr2Oa4csspmLIFWFuYRsQmQDnUQfqUi78bCNTmIm8gmdAePgxV4LvW4a4BR3aASFfu00kVsnIvNN'
                amount={price*100}
                name='shopping cart'
                currency='INR'
                >

                    <button className='btn btn-primary'>Place Your Order</button>
                </StripeCheckout>

                <button className='btn btn-warning' style={{ color: 'blue' }} onClick={() => navigate('/home')}> Back to home</button>
            </div>
        </div>
    )
}
export default Cart
