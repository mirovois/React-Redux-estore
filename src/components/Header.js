import React from 'react'
import {useSelector} from 'react-redux'
import {HiShoppingCart} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Header = () => {
    const basketContent = useSelector((state) => state.basket)
    const {basket} = basketContent
    
    return (
        <div class='container-fluid d-flex justify-content-between p-2' style={{backgroundColor: '#e4a2fe',}}>       
                <Link to='/'>
            <h3 class=''>
                Bread E-store
            </h3>
                </Link>
            <div class='mx-2'>
                <Link to='/basket'>
                <HiShoppingCart class='mx-2' style={{height:'40',width:'40'}}/>
                </Link>
                {basket?.length>0 && 
                <span>{basket.length}</span>             
                }
            </div>
        </div>
    )
}

export default Header
