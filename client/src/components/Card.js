import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToBasket} from '../actions/basketActions'
import {decreaseTotal} from '../actions/itemsActions'

export const Card = ({id,name,image,price,quantity,description}) => {

    const dispatch = useDispatch()
    const basketContent = useSelector(state => state.basket)
    const{basketItems} = basketContent


    let storeItem = basketItems?.find(object => object.item === id);

    const buttonDisabled = storeItem ? true : false;
   
    const handleAdd = () =>{        
        dispatch(addToBasket(id))
       
        console.log('Added to basket. Basket:',basketItems)
    }

    return (
        // <div class='col p-2'>
            <div class="card bg-transparent border-secondary border-3 rounded-3 p-0 m-4 shadow-lg" style={{width: '18rem'}}>
                <div className='card-image'>
                    <img src={image} class="card-img-top" style={{height: '12rem'}} alt="..."/>
                </div>
                    <div class="card-body bg-transparent bg-gradient">
                        <div className='card-text d-flex justify-content-between text-capitalize text-light'>
                        <h5 class="card-title d-inline-block">{name}</h5>
                        <span>${price}</span>
                        {/* <div className='d-flex justify-content-between'>
                        <h5 class="card-title d-inline-block">{name}</h5>
                        <span className='text-center'>${price}</span>
                        </div>
                        <p class="card-text text-muted">{description}</p>
                        <div class='d-flex justify-content-between '>
                        <span>In stock: <strong>{quantity}</strong></span>
                    </div> */}
                        </div>
                        
                        <button 
                        disabled={buttonDisabled}
                        onClick={handleAdd}  
                        class={`btn btn-md outline-none w-100 mt-4 text-uppercase border border-secondary border-3 rounded-2 btn-transparent fw-bold ${storeItem ? 'text-light btn-secondary' : '' }`}>
                            {storeItem ? "Added To Basket" : "Add to Basket +"}
                        </button>
            </div>
     </div>
    )
}
