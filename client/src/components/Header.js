import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {HiShoppingCart} from 'react-icons/hi'
import {GiOpenFolder} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {fetchOrders} from '../actions/orderActions'

const Header = () => {
    const basketContent = useSelector((state) => state.basket)
    const {basket} = basketContent
    const {orders} = useSelector(state =>state.order)
    
    const dispatch = useDispatch()
    useEffect (() =>{
        dispatch(fetchOrders())
    },[dispatch])
    return (
        <div class='container-fluid d-flex justify-content-between p-2' style={{backgroundColor: '#e4a2fe',}}>       
                <Link to='/'>
            <h3 class=''>
                Bread E-store
            </h3>
                </Link>
            <div class='mx-2 d-flex align-items-center'>
                {orders && orders.length>0 && (
                    <div className='mx-4'>
                        <Link to='/orders' style={{'textDecoration':'none'}}>
                        <GiOpenFolder class='mb-1 mx-1' style={{height:'20',width:'20'}}/>
                        <span>Orders</span>
                        </Link>
                    </div>
                )}

                        <Link to='/basket' style={{'textDecoration':'none'}}>
                        <HiShoppingCart class='mx-1' style={{height:'40',width:'20'}}/>
                        <span>Basket</span>
                        {basket?.length>0 && 
                        <strong>({basket.length})</strong>             
                        }
                        </Link>
            </div>
        </div>
    )
}

export default Header
