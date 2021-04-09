import axios from 'axios'

export const addOrder = (order) =>async (dispatch) => {
        try{
            // dispatch({type:'ORDER_ADD_REQUEST'})
            const {data} = await axios.post('/orders', order)
              dispatch({
                type: 'ORDER_ADD_SUCCESS',
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }