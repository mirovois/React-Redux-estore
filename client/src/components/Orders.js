import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchOrders} from '../actions/orderActions'

const Orders = () => {
    const dispatch = useDispatch()
    const {orders} = useSelector(state =>state.order)
    
    
    useEffect (() =>{
        dispatch(fetchOrders())
    },[dispatch])

    console.log('Order component', orders)
    return (
        <div className='container-fluid bg-dark min-vh-100 text-light py-4'>
            <h1 className='text-center my-4'>Placed orders</h1>
            {/* <div className='row p-2'> */}
            {orders?.map(order =>(
                <div className='col-xs-12 col-sm-10 col-md-8 bg-secondary mx-auto border border-black border-5 p-4 mx-4 mt-4'>
                    <h2>Order <small>({order._id})</small></h2>  
                    <div className='border-bottom'>
                    <h4>Receiver:</h4>
                    <p>Name: {order.personalDetails.firstName} {order.personalDetails.lastName}</p>
                    </div>
                    <div className='border-bottom'>
                    <h4>Shipping</h4>
                    <p>Address: &nbsp;{order.personalDetails.address},&nbsp; {order.personalDetails.postal},
                    &nbsp;{order.personalDetails.city}, &nbsp;{order.personalDetails.country}
                    </p>
                    </div>
                    <div >
                    <h4>Order items</h4> 
                    <ul className='list-group list-group-flush border-bottom'>
                        {order.orderItems.map(orderItem =>(
                        <li className='list-group-ite d-flex justify-content-between'>
                            <h6 className='px-4 mx-4'>{orderItem.name}</h6>
                            <p className='px-4 mr-4'>{orderItem.inBasket} x ${orderItem.price} = ${(orderItem.inBasket * orderItem.price).toFixed(2)}</p>
                        </li>
                        ))}
                    </ul>
                    <h5 className='mx-4 mt-2 d-flex justify-content-end'>Total:${order.totalPrice.toFixed(2)}</h5>
                   
                    </div>
                </div>
    ))}
        </div>
    )
}

export default Orders
