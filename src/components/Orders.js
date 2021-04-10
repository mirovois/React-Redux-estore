import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchOrders} from '../actions/orderActions'

const Orders = () => {
    const dispatch = useDispatch()
    const {orders} = useSelector(state =>state.order)
    // const {orderItems} = orders
    useEffect (() =>{
        dispatch(fetchOrders())
    },[dispatch])

    console.log('Order component', orders)
    return (
        <div className='container'>
            <h1 className='text-center'>Placed orders</h1>
            <div className='row border border-light border-5 p-2'>
                <div className='col-sm-12 col-md-7 bg-light '>
                    <h2>Order <small>GHJ345L</small></h2>  
                    <div className='border-bottom'>
                    <h4>Receiver:</h4>
                    <p>Name: Myroslav Voysovych</p>
                    </div>
                    <div className='border-bottom'>
                    <h4>Shipping</h4>
                    <p>Address: 2805 boul des Trinitaires</p>
                    </div>
                    <div className='border-bottom'>
                    <h4>Order items</h4> 
                    <ul className='list-group list-group-flush'>
                        <li className='list-group-ite d-flex justify-content-between'>
                            <p className='px-4 mx-4'>Rye Bread</p>
                            <p className='px-4 mr-4'>1 x $3.75 = $7.50</p>
                        </li>
                        <li className='list-group-ite d-flex justify-content-between'>
                            <p className='px-4 mx-4'>Rye Bread</p>
                            <p className='px-4 mr-4'>1 x $3.75 = $7.50</p>
                        </li>
                    </ul>

                    {/* <table className='table '>
                        <tbody className='bg-light'>
                            <tr>
                                <td className>Rye Bread</td>
                                <td className='align-end'>$1 x 3.75 = $7.50</td>
                            </tr>
                            <tr>
                                <td>Multigrain</td>
                                <td className=''>2 x $4.25 = $8.50</td>
                            </tr>
                        </tbody>
                    </table> */}
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-sm-12 col-md-4 bg-light'>
                    <table className='table '>
                        <tbody className='bg-light'>
                            <tr>
                                <td colspan='2' className='text-left'> 
                                <h3>Order summary</h3>
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>$30</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Orders
