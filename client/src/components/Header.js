import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {HiShoppingCart} from 'react-icons/hi'
import {GiOpenFolder} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import {fetchOrders} from '../actions/orderActions'

const Header = () => {
    const basketContent = useSelector((state) => state.basket)
    const {basketItems} = basketContent
    const {orders} = useSelector(state =>state.order)
    
    const dispatch = useDispatch()
    useEffect (() =>{
        dispatch(fetchOrders())
    },[dispatch])
    
    return (
        <nav class='container-fluid d-flex justify-content-between' style={{backgroundColor: '#e3f2fd'}}>       
                <Link to='/'>
            <h3 class=''>
                Bread E-store
            </h3>
                </Link>
            <div class='mx-2 d-flex align-items-center text-light'>
                {orders && orders.length>0 && (
                    <div className='mx-4 '>
                        <Link to='/orders'  style={{'textDecoration':'none', text:'white'}}>
                        <GiOpenFolder class='mb-1 mx-1' color="white" style={{height:'20',width:'20'}}/>
                        <span>Orders</span>
                        </Link>
                    </div>
                )}

                        <Link to='/basket' style={{'textDecoration':'none'}}>
                        <HiShoppingCart class='mx-1 ' style={{height:'40',width:'20'}}/>
                        <span>Basket</span>
                        {basketItems?.length>0 && 
                        <strong>({basketItems.length})</strong>             
                        }
                        </Link>
            </div>
        </nav>
    )
}

export default Header
