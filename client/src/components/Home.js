import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Card } from './Card'
import {useDispatch, useSelector} from 'react-redux'
import {getItems, sortItems} from '../actions/itemsActions'
import {BiChevronsDown} from 'react-icons/bi'
import {BiChevronsUp} from 'react-icons/bi'
import {GridLoader} from 'react-spinners'
import {Fade} from 'react-reveal/Fade'


const Home = () => {
    const dispatch = useDispatch()
    
    const[expended, setExpended] = useState(false)
    const[itemsToShow, setItemsToShow] = useState(6) 

    const[sortedItem, setSortedItem] = useState('')

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
        <div class='bg-dark min-vh-100'>
            {loading ? 
                <div className='row d-flex justify-content-center align-items-center vh-100'>
                <GridLoader loading={loading} size={55} margin={25} color={'rgb(163, 148, 148)'} /> 
                </div>
                :
                 (                
                <div class='container fluid '>
                <div className='row pt-4'>
                <div className='col-12 col-sm-6 text-center'>
                    <h4 class='d-inline-block text-uppercase text-light mx-4'>Order by</h4>
                    <select className='align-self-center' value={sortedItem} onChange={(e) =>dispatch(sortItems(items,e.target.value))}>
                        <option className='option' value=''>Select</option>
                        <option className='option' value='name'>name</option>
                        <option className='option' value='price'>price</option>
                    </select>
                </div>
            </div>
                <div class = 'row row-cols-xs-1 row-cols-md-2 row-cols-lg-3  gap-4 d-flex justify-content-center bg-dark'>
                    {items.slice(0,itemsToShow).map(item =>
                        <Card 
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        description={item.description}
                        />
                    )}
                <button onClick={showMore} className='d-flex my-4 btn btn-primary btn-lg w-50 w-md-75'>
                    {expended ?
                    (<span className='mx-auto'>
                        <BiChevronsUp style={{height:'40',width:'40'}}/>
                        HIDE
                    </span>
                ) :
                (<span className='mx-auto'>
                    <BiChevronsDown style={{height:'40',width:'40'}}/>
                    SHOW MORE
                </span>
                
                )   
                } 
                </button>
                </div>  
               </div>
             )
             
             } 
             
        </div>
    )
}
export default Home
