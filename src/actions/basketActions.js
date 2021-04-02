import axios from 'axios'

export const addToBasket = (id) => async(dispatch, getState) => {
    try{
const {data} = await axios.get(`/items/${id}`)

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
