import axios from 'axios'

const URL = 'https://miro-estore-app.herokuapp.com'
export const addToBasket = (id) => async(dispatch, getState) => {
        
    try{
        const {data} = await axios.get(`${URL}/items/${id}`)
        dispatch({
            type:'ADD_TO_BASKET',
            payload:
            {
                item: data._id,
                image:data.image,
                name:data.name,
                price:data.price,
                quantity:data.quantity
            }
        })
        localStorage.setItem('basket', JSON.stringify(getState().basket))
    }
    catch(error){
        console.log(error)
    }
    }

    export  const removeFromBasket = (id) =>async (dispatch, getState) =>{
        try{
            dispatch({
                type:"REMOVE_FROM_BASKET",
                payload: id
            })
            localStorage.setItem('basket', JSON.stringify(getState().basket))
        }
        catch(error){
            console.log(error.message)
        }
    }    
    export  const emptyBasket = () =>async (dispatch, getState) =>{
        try{
            dispatch({
                type:"EMPTY_BASKET"
            })
            localStorage.setItem('basket', JSON.stringify(getState().basket))
        }
        catch(error){
            console.log(error.message)
        }
    }
    export  const decreaseByOne = (id) =>async (dispatch, getState) =>{
        try{
            dispatch({
                type:"DECREASE_ITEM_NUMBER",
                payload: id
            })
            localStorage.setItem('basket', JSON.stringify(getState().basket))
        }
        catch(error){
            console.log(error.message)
        }
    }  

    export const savePersonalDetails = (data) => (dispatch) =>{
        dispatch({
            type:'SAVE_PERSONAL_DETAILS',
            payload:data
        })
        localStorage.setItem('personalDetails', JSON.stringify(data))
    } 
    export  const resetPersonalDetails = () =>async (dispatch, getState) =>{
        try{
            dispatch({
                type:"RESET_PERSONAL_DETAILS"
            })
            localStorage.setItem('personalDetails', JSON.stringify(getState()))
        }
        catch(error){
            console.log(error.message)
        }
    }