import axios from 'axios'

const URL = 'https://miro-estore-app.herokuapp.com'
export const getItems = () =>async (dispatch) => {
        try{
            dispatch({type:'FETCH_REQUEST'})
            const {data} = await axios.get(`${URL}/items`)
              dispatch({
                type: 'FETCH_SUCCESS',
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
    export const decreaseTotal = (id) =>async (dispatch) => {
        try{
            dispatch({type:'TOTAL_DECREASE'})
            const {data} = await axios.get(`${URL}/items/${id}`)
              dispatch({
                type: 'FETCH_SUCCESS',
                payload: {
                    item:data._id
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    }