import axios from 'axios'

export const fetchOrders = () =>async (dispatch) =>{
        try{
            const {data} = await axios.get('/orders')
                dispatch({
                    type:'FETCH_ORDERS',
                    payload:data
                })
        }
        catch(error){
            console.log(error.message)
        }
}

export const addOrder = (order) =>async (dispatch) => {
        try{
            dispatch({type:'ORDER_ADD_REQUEST'})
            const {data} = await axios.post('/orders', order)
              dispatch({
                type: 'ORDER_ADD_SUCCESS',
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }