import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {HiShoppingCart} from 'react-icons/hi'
import {Link} from 'react-router-dom'

const Header = () => {
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
                <span>4</span>
            </div>
        </div>
    )
}

export default Header
