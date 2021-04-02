import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addToBasket} from '../actions/basketActions'


export const Card = ({id,name,image,price,quantity}) => {

    const[item, setItem] = useState({})
    const dispatch = useDispatch()
    const basketContent = useSelector(state => state.basket)
    const{basket} = basketContent

   
    const handleAdd = () =>{
        
        // const newItem = {id:id, name:name, price:price,quantity:quantity}

        
        dispatch(addToBasket(id))
        // console.log('Clicked item',newItem)
    }
    console.log('Basket',basket)

    return (
        <div class='col p-2'>
            <div class="card" style={{width: '18rem'}}>
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body border bg-light">
                        <div className='d-flex justify-content-between'>
                        <h5 class="card-title d-inline-block">{name}</h5>
                        <span className='text-center'>${price}</span>
                        </div>
                        <p class="card-text text-muted">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class='d-flex justify-content-between '>
                        <button onClick={handleAdd} class="btn btn-md btn-primary">Add to basket</button>
                        <button class="btn btn-md btn-primary" >Remove</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
