import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {BiChevronsLeft} from 'react-icons/bi'
import {BiChevronsRight} from 'react-icons/bi'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {removeFromBasket, addToBasket, decreaseByOne,emptyBasket} from '../actions/basketActions'
import Fade from 'react-reveal/Fade'

const Basket = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const basketContent = useSelector(state => state.basket)
    const{basketItems} = basketContent
  
    const handleRemove = (idi) =>{
        dispatch(removeFromBasket(idi))
    }

    const handleIncrease = (idi) =>{
        dispatch(addToBasket(idi))
    }

    const handleDecrease = (idi) =>{
        dispatch(decreaseByOne(idi))
    }

    const handleEmptyBasket = () =>{
        dispatch(emptyBasket())
    }

    // const handleCheckout = () =>{
    //     history.push('/checkout')
    // }

    return (
        <div className='bg-dark vh-100 text-white'>
        { basketItems && basketItems.length ===0 ? 
            <h1 className='text-center my-4'>Your shopping basket is empty</h1>  :
            (  <div class="container  p-4 mt-4">
                <h1 class="display-4">Shopping basket</h1>
                <p class="lead">You can change quantity of any product by adding or removing a certain item.</p>
                <hr/>
                <div className='row'>
                    <div class="col-xs-12 col-md-7 order-1 order-md-0">
                        <table class="table text-light">
                            <Fade left cascade>
                                <thead class="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th className='text-center'>Bread</th>
                                    <th className='text-center'>Price</th>
                                    <th className='text-center'>Quantity</th>
                                </tr>
                                </thead>
                                <tbody>
                            {basketItems.map((item,i) =>
                                (<tr key={i}>
                                    <th className='align-middle'>{i+1}</th>
                                    <td className='text-center'><img src={item.image} style={{height:'4rem', width:'4rem',objectFit:'cover'}}/></td>
                                    <td className='text-center align-middle'>{item.name}</td>
                                    <td className='text-center align-middle'>${item.price}</td>
                                    <td className='text-center align-middle'>                           
                                <button
                                    disabled={item.inBasket >=item.quantity}
                                    onClick={() => handleIncrease(item.item)}
                                    className="btn btn-primary btn-sm p-1 p-lg-2"
                                >+
                                </button>
                                &nbsp; {item.inBasket}&nbsp;&nbsp;
                                <button
                                    onClick={() => handleDecrease(item.item)} 
                                    className="btn btn-primary btn-sm p-1 p-lg-2"
                                    >-</button>
                                </td>
                                    <RiDeleteBin5Fill onClick={() =>handleRemove(item.item)} class='mt-3 mx-sm-0 btn-del' size={44} color='inherit' cursor='pointer'  />
                                </tr>                    
                                )
                            )}
                                </tbody>

                            </Fade>
                        </table>
                        <div class="col-12 col-sm-10 d-flex justify-content-between mb-4">
                            <button onClick={() => history.push('/')} className='btn btn-ctrl btn-transparent border  text-light border-3 border-secondary btn-sm btn-lg'> 
                                <BiChevronsLeft size={25} color="inherit"/>Back to main
                            </button>
                            <button onClick={handleEmptyBasket} class="btn btn-ctrl btn-transparent border border-3 text-light border-secondary">
                                <RiDeleteBin5Fill  class='mx-2' size={25} color='inherit' cursor='pointer'  />
                                Empty basket
                            </button>
                        </div>
                    </div>

                    <div className='col-xs-10 col-md-5 mb-4'>
                        <div className='mx-2 p-4 bg-secondary mb-4'>
                        <h1>Checkout</h1>
                        <hr/>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 style={{'display':'inline-block'}}>Total:</h2>
                            <h4 className='mr-4'>${basketItems.reduce((acc, item) => acc + item.price*item.inBasket, 0).toFixed(2)}</h4>    
                        </div>
                        <button className= 'btn btn-ctrl btn-transparent border border-3 text-light mt-2' onClick={() => history.push('/checkout')}>
                            Proceed to checkout
                            <BiChevronsRight />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
             )
        }
    </div>
    )
}
export default Basket
