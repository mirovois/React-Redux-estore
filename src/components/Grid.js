import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from './Card'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from '../actions/itemsActions'

const Grid = () => {
    
    const dispatch = useDispatch()

    const itemsList = useSelector(state => state.items)

    const {basket} = useSelector(state => state.basket)

    const { items, loading} = itemsList

    useEffect(() =>{
        dispatch(getItems())
    },[dispatch])

   
    return (
        <div class='container px-4'>
            {loading ? <h1 class='text-center'>LOADING...</h1> : (
                <div class = 'row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 g-2 '>
                    {items?.map(item =>
                        <Card 
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        />
                    )}
                </div>
             )} 
        </div>
    )
}

export default Grid
