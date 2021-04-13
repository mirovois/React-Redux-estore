import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from './Card'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from '../actions/itemsActions'
import {BiChevronsDown} from 'react-icons/bi'
import {BiChevronsUp} from 'react-icons/bi'

const Grid = () => {
    const dispatch = useDispatch()
    
    const[expended, setExpended] = useState(false)
    const[itemsToShow, setItemsToShow] = useState(6) 

    const itemsList = useSelector(state => state.items)
    const { items, loading} = itemsList

    const showMore =() =>{
        if (itemsToShow === 6) {
            setExpended(true)
            setItemsToShow(items.length)
        } else {
            setItemsToShow(6)
            setExpended(false)
        }
    }

    useEffect(() =>{
        dispatch(getItems())
    },[dispatch])   
   
    return (
        <div class='container px-4'>
            {loading ? <h1 class='text-center'>LOADING...</h1> : (
                <div className='container'>
                <div class = 'row row-cols-xs-1 row-cols-md-2 row-cols-lg-3 g-2 '>
                    {items?.slice(0,itemsToShow).map(item =>
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
                <button onClick={showMore} className='d-flex col-2 mx-auto mt-4 btn btn-primary'>
                    {expended ?
                    (<span className='mx-auto'>
                        <BiChevronsUp style={{height:'40',width:'40'}}/>
                        HIDE
                    </span>
                ) :
                (<span className='mx-auto'>
                    <BiChevronsDown style={{height:'40',width:'40'}}/>
                    SHOW MORE
                </span>)   
                } 
                </button>
                </div>
             )} 
        </div>
    )
}
export default Grid
