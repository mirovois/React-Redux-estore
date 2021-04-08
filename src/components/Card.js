import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToBasket} from '../actions/basketActions'


export const Card = ({id,name,image,price,quantity}) => {

    const dispatch = useDispatch()
    const basketContent = useSelector(state => state.basket)
    const{basket} = basketContent


    let storeItem = basket.find(object => object.item === id);

    const buttonDisabled = storeItem ? true : false;
   
    const handleAdd = () =>{        
        dispatch(addToBasket(id))
    }
    console.log('Added to basket. Basket:',basket)

    return (
        <div class='col p-2'>
            <div class="card" style={{width: '18rem'}}>
                <div className='card-image'>
                    <img src={image} class="card-img-top" alt="..."/>
                </div>
                    <div class="card-body border bg-light">
                        <div className='d-flex justify-content-between'>
                        <h5 class="card-title d-inline-block">{name}</h5>
                        <span className='text-center'>${price}</span>
                        </div>
                        <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class='d-flex justify-content-between '>
                        <button 
                            disabled={buttonDisabled}
                            onClick={handleAdd}  
                            class="btn btn-md btn-primary">
                                {storeItem ? "Added To Basket" : "Add to Basket"}
                        </button>
                        <span>In stock: <strong>{quantity}</strong></span>
                        </div>
                    </div>
            </div>
        </div>
    )
}
