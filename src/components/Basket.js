import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {BiChevronsLeft} from 'react-icons/bi'
import {BiChevronsRight} from 'react-icons/bi'
import {RiDeleteBin5Fill} from 'react-icons/ri'
import {removeFromBasket, addToBasket, decreaseByOne,emptyBasket} from '../actions/basketActions'
import Modal from './Modal'

const Basket = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    
    const basketContent = useSelector(state => state.basket)
    const{basket} = basketContent
  
    const handleRemove = (idi) =>{
        dispatch(removeFromBasket(idi))
        console.log('Clicked for delete', idi)
    }

    const handleIncrease = (idi) =>{
        dispatch(addToBasket(idi))
    }

    const handleDecrease = (idi) =>{
        dispatch(decreaseByOne(idi))
    }

    const handleEmptyBasket = () =>{
        dispatch(emptyBasket())
        console.log('Empty basket')
    }

    const handleCheckout = () =>{
        history.push('/checkout')
    }

    return (
        <>
        {!basket ? 
            <h1 className='text-center my-4'>Your shopping basket is empty</h1>
            :
            (
                <div class="container  mt-4">
                <h1 class="display-4">Shopping basket</h1>
                <p class="lead">You can change quantity of any product by adding or removing a certain item.</p>
                <hr/>
                <div className='row'>
                    <div class="col-xs-12 col-md-8">
                        <table class="table">
                            <thead class="thead-dark">
                            <tr>
                                <th>#</th>
                                <th className='text-center'>Bread</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                        {basket?.map((item,i) =>
                            (<tr key={i}>
                                <th>{i+1}</th>
                                <td className='text-center'>{item.name}</td>
                                <td className='text-center'>${item.price}</td>
                                <td className='text-center'>                           
                            <button
                                disabled={item.inBasket >=item.quantity}
                                onClick={() => handleIncrease(item.item)}
                                className="btn btn-primary btn-sm"
                            >+
                            </button>
                            &nbsp; {item.inBasket}&nbsp;&nbsp;
                            <button
                                onClick={() => handleDecrease(item.item)} 
                                className="btn btn-primary btn-sm"
                                >-</button>
                            </td>
                                <RiDeleteBin5Fill onClick={() =>handleRemove(item.item)} class='mx-2' size={44} color='inherit' cursor='pointer'  />
                            </tr>                    
                            )
                        )}
                            </tbody>
                        </table>
                        <div class="col-10 d-flex justify-content-between mb-4">
                <button onClick={() => history.push('/')} className='btn btn-primary'> 
                    <BiChevronsLeft size={20}/>Back to main
                 </button>
                <button onClick={handleEmptyBasket} class="btn btn-primary">
                    <RiDeleteBin5Fill  class='mx-2' size={30} color='inherit' cursor='pointer'  />
                    Empty basket
                </button>
            </div>
        </div>

                    <div className='col-xs-12 col-md-4'>
                        <div className='mx-2 p-4 bg-light'>
                        <h1>Checkout</h1>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2 style={{'display':'inline-block'}}>Total:</h2>
                            <h4 className='mr-4'>${basket.reduce((acc, item) => acc + item.price*item.inBasket, 0).toFixed(2)}</h4>    
                        </div>
                        <button className= 'btn btn-primary mt-2' onClick={handleCheckout}>
                            Proceed to checkout
                            <BiChevronsRight />
                            </button>
                        </div>
                    </div>
                </div>
                </div>
             )
        }
    </>
    )
}
export default Basket
