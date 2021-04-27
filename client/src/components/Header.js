import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {HiShoppingCart} from 'react-icons/hi'
import {GiOpenFolder} from 'react-icons/gi'
import {Link, NavLink} from 'react-router-dom'
import {fetchOrders} from '../actions/orderActions'
import img from '../assets/bread_logo.png'

const Header = () => {
    const basketContent = useSelector((state) => state.basket)
    const {basketItems} = basketContent
    const {orders} = useSelector(state =>state.order)
    
    const dispatch = useDispatch()
    useEffect (() =>{
        dispatch(fetchOrders())
    },[dispatch])
    
    return (
        // <nav class='container-fluid d-flex justify-content-between' style={{backgroundColor: '#e3f2fd'}}>       
        //         <Link to='/'>
        //     <h3 class=''>
        //         Bread E-store
        //     </h3>
        //         </Link>
        //     <div class='mx-2 d-flex align-items-center text-light'>
        //         {orders && orders.length>0 && (
        //             <div className='mx-4 '>
        //                 <Link to='/orders'  style={{'textDecoration':'none', text:'white'}}>
        //                 <GiOpenFolder class='mb-1 mx-1' color="white" style={{height:'20',width:'20'}}/>
        //                 <span>Orders</span>
        //                 </Link>
        //             </div>
        //         )}

        //                 <Link to='/basket' style={{'textDecoration':'none'}}>
        //                 <HiShoppingCart class='mx-1 ' style={{height:'40',width:'20'}}/>
        //                 <span>Basket</span>
        //                 {basketItems?.length>0 && 
        //                 <strong>({basketItems.length})</strong>             
        //                 }
        //                 </Link>
        //     </div>
        // </nav>
        // <div class="sticky-top">
            <nav className="navbar navbar-expand-md navbar-light px-4  sticky-top">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="/">
                    <img src={img} style={{height:'2rem', width:'4rem'}}/>
                    <h3 className='header__title d-inline align-middle text-lead fw-bolder mx-2'>E-Bakery</h3>
                </a>
                <div className="collapse navbar-collapse text-center text-md-end d-md-flex justify-content-end" id="collapse_target">
                    <ul className="navbar-nav nav">
                    {orders && orders.length>0 && (
                        <li className="nav-item align-middle mr-sm-2" >
                            <NavLink to='/orders' exact style={{textDecoration:'none',opacity:0.6 }} className='nav-link active' activeStyle={{ opacity:1}}>
                                <GiOpenFolder className='mx-1 ' size={35}/>
                                <span>Orders</span>
                            </NavLink>
                        </li>
                    )}    
                    <li className="nav-item mr-sm-2 align-middle">
                        <NavLink to='/basket' exact style={{textDecoration:'none',opacity:0.6}} className='nav-link active' activeStyle={{ opacity:1}}>
                            <HiShoppingCart className='mx-1 ' size={35}/>
                            <span>Basket</span>
                            {basketItems?.length>0 && 
                            <strong>({basketItems.length})</strong>             
                            }
                         </NavLink>
                    </li>
                    </ul>
                    
                </div>
            </nav>
        // </div>
    )
}

export default Header
