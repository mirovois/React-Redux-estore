import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {HiShoppingCart} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='container-fluid d-flex justify-content-between p-2' style={{backgroundColor: '#e4a2fe',}}>
            <h3 className='display'>
                <Link to='/'>
                Bread E-store
                </Link>
            </h3>
            <div class='mx-2'>
                <Link to='/order'>
                <HiShoppingCart class='mx-2' style={{height:'40',width:'40'}}/>
                </Link>
                <span>4</span>
            </div>
        </div>
    )
}

export default Header
