import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from './Card'
import {useDispatch, useSelector} from 'react-redux'
import {getItems} from '../actions/itemsActions'

const Grid = () => {
    // const [items, setItems] = useState([])

    const dispatch = useDispatch()

    const itemsList = useSelector(state => state.items)

    const { items, loading} = itemsList

    useEffect(() =>{
        // const fetchData = async () =>{
        //     const response = await axios.get('/items');
        //     setItems(response.data)
        // } 
        // fetchData();
        dispatch(getItems())
    },[dispatch])
    console.log('Grid items:',items)
    return (
        <div class='container px-4'>
            {loading ? <h1 class='text-center'>LOADING...</h1> : (
                <div class = 'row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2'>
                    {items?.map(item =>
                        <Card 
                        key={item.id}
                        image={item.image}
                        />
                    )}
                </div>
             )} 
        </div>
    )
}

export default Grid
