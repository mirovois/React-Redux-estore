import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from './Card'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from '../actions/itemsActions'
import {BiChevronsDown} from 'react-icons/bi'
import {BiChevronsUp} from 'react-icons/bi'

const Grid = () => {
    // const [items, setItems] = useState([])
    const[expended, setExpended] = useState(false)
    const[itemsToShow, setItemsToShow] = useState(3) 
    const dispatch = useDispatch()

    const itemsList = useSelector(state => state.items)

    const {basketItems} = useSelector(state => state.basket)

    const { items, loading} = itemsList

    // const itemsToShow = 3

    const showMore =() =>{
        if (itemsToShow === 3) {
            setExpended(true)
            setItemsToShow(items.length)
        } else {
            setItemsToShow(3)
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
                ) 
                :
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
